"""Backend API tests for retro desktop portfolio.

Covers:
- Health endpoint
- Contact create + list (persistence)
- Visitor register, get, calendar
- Validation errors
"""
import os
import pytest
import requests
import time

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://nostalgia-code.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_root(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("message") == "retro-desktop-portfolio api"


# ---------- Contact ----------
class TestContact:
    def test_create_contact_and_persist(self, client):
        unique = f"TEST_user_{int(time.time())}"
        payload = {
            "name": unique,
            "email": f"{unique}@example.com",
            "message": "Hello from automated test",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        body = r.json()
        assert body["name"] == payload["name"]
        assert body["email"] == payload["email"]
        assert body["message"] == payload["message"]
        assert isinstance(body.get("id"), str) and body["id"]
        assert "timestamp" in body

        # GET list and verify presence
        r2 = client.get(f"{API}/contact")
        assert r2.status_code == 200
        items = r2.json()
        assert isinstance(items, list)
        ids = [it["id"] for it in items]
        assert body["id"] in ids
        matched = next(it for it in items if it["id"] == body["id"])
        assert matched["name"] == payload["name"]
        assert matched["email"] == payload["email"]

    def test_create_contact_invalid_email(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "TEST_bad",
            "email": "not-an-email",
            "message": "hi",
        })
        assert r.status_code == 422

    def test_create_contact_missing_fields(self, client):
        r = client.post(f"{API}/contact", json={"name": "x"})
        assert r.status_code == 422

    def test_create_contact_empty_message(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "TEST_empty",
            "email": "a@b.com",
            "message": "",
        })
        assert r.status_code == 422


# ---------- Visitor ----------
class TestVisitor:
    def test_visitor_register_increments(self, client):
        before = client.get(f"{API}/visitor").json()
        r = client.post(f"{API}/visitor")
        assert r.status_code == 200
        data = r.json()
        assert "count" in data and "today" in data and "last_visit" in data
        assert isinstance(data["count"], int)
        assert isinstance(data["today"], int)
        assert data["count"] >= before["count"] + 1
        assert data["today"] >= before["today"] + 1
        assert data["last_visit"] is not None

    def test_visitor_get_stats(self, client):
        r = client.get(f"{API}/visitor")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data.get("count"), int)
        assert isinstance(data.get("today"), int)

    def test_visitor_calendar(self, client):
        # ensure at least one visit exists
        client.post(f"{API}/visitor")
        r = client.get(f"{API}/visitor/calendar")
        assert r.status_code == 200
        data = r.json()
        assert "days" in data
        assert isinstance(data["days"], list)
        if data["days"]:
            row = data["days"][0]
            assert "day" in row and "count" in row
            assert isinstance(row["count"], int)
