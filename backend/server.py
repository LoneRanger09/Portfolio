from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(min_length=1, max_length=2000)


class VisitorStats(BaseModel):
    count: int
    today: int
    last_visit: str | None = None


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "retro-desktop-portfolio api"}


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact(payload: ContactCreate):
    msg = ContactMessage(**payload.model_dump())
    doc = msg.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.contact_messages.insert_one(doc)
    return msg


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contacts():
    items = await db.contact_messages.find({}, {"_id": 0}).sort("timestamp", -1).to_list(500)
    for it in items:
        if isinstance(it.get('timestamp'), str):
            it['timestamp'] = datetime.fromisoformat(it['timestamp'])
    return items


@api_router.post("/visitor", response_model=VisitorStats)
async def register_visitor():
    now = datetime.now(timezone.utc)
    today_key = now.date().isoformat()

    await db.visits.insert_one({
        "id": str(uuid.uuid4()),
        "ts": now.isoformat(),
        "day": today_key,
    })
    total = await db.visits.count_documents({})
    today_count = await db.visits.count_documents({"day": today_key})
    return VisitorStats(count=total, today=today_count, last_visit=now.isoformat())


@api_router.get("/visitor", response_model=VisitorStats)
async def get_visitor_stats():
    now = datetime.now(timezone.utc)
    today_key = now.date().isoformat()
    total = await db.visits.count_documents({})
    today_count = await db.visits.count_documents({"day": today_key})
    last = await db.visits.find_one({}, sort=[("ts", -1)], projection={"_id": 0, "ts": 1})
    return VisitorStats(count=total, today=today_count, last_visit=(last or {}).get("ts"))


@api_router.get("/visitor/calendar")
async def visitor_calendar():
    """Return a daily count map for the last 60 days (calendar heatmap data)."""
    pipeline = [
        {"$group": {"_id": "$day", "count": {"$sum": 1}}},
        {"$sort": {"_id": -1}},
        {"$limit": 60},
    ]
    rows = await db.visits.aggregate(pipeline).to_list(60)
    return {"days": [{"day": r["_id"], "count": r["count"]} for r in rows]}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
