# Arnav Kumar — Retro Desktop Portfolio

## Original problem statement
Fully responsive, interactive portfolio for a CSE student inspired by a retro Windows/Linux desktop. Folder icons as nav, draggable windows (min/max/close), terminal, olive-green/beige/cream/dark-gray palette, framer-motion. Includes About, Skills, Projects, Experience, Certifications, Resume, Achievements, Contact, Terminal, Recruiter Mode, dark/light toggle, command palette (Ctrl+K), visitor counter.

## User personas
- Recruiters/HMs evaluating in <60s (Recruiter Mode dashboard)
- Peers/devs exploring projects, code links
- Visitors browsing the playful desktop experience

## Core requirements (static)
- React + Tailwind + Framer Motion + Shadcn (cmdk for palette) + Lucide icons
- FastAPI backend + MongoDB for contact form + visitor counter
- Retro desktop UI with grid background, yellow folders, olive title bars, hard 4px retro shadows
- Fonts: VT323 (pixel), IBM Plex Sans (body), Space Mono (mono)

## Implemented (2026-06-12)
- Loading screen ("ARNAV OS v0.26" boot)
- Desktop with grid background + PORTFOLIO heading + typing animation
- 10 desktop icons (About, Projects, Skills, Experience, Certifications, Achievements, Resume, Contact, Terminal, Recruiter Mode)
- Draggable retro windows w/ working minimize/maximize/close + drag from title bar via framer-motion useDragControls
- Compact calendar visitor counter (top-right) with real backend totals
- All window contents: About (avatar, profile, social links), Skills (animated segmented bars), Projects (5 cards + detail windows), Experience timeline, Achievements badges, Certifications w/ modal preview, Resume (download + print), Contact (form posts to MongoDB), Terminal (help/about/skills/projects/clear/whoami/date/recruiter), Recruiter Mode dashboard
- Taskbar with START, open windows, social links, visitor pill, Ctrl+K, theme toggle
- Command palette (Ctrl+K) via cmdk
- Light/Dark theme toggle with persisted localStorage
- Custom SVG cursor (desktop)
- Personal data centralised in `src/data/portfolio.js` (Arnav Kumar, SLIET, Batch '26)

## Backend API
- POST/GET `/api/contact` — contact submissions
- POST/GET `/api/visitor` — visit registration + totals
- GET `/api/visitor/calendar` — 60-day heatmap data

## Backlog (P1)
- Replace placeholder resume with real PDF link in `data/portfolio.js`
- Replace dicebear avatar with real photo URL
- IP/session de-dup on `/api/visitor` to prevent inflation
- Real GitHub contribution graph (current is decorative — wire to GitHub API)
- Real LeetCode stats widget on About

## Next tasks
- Provide real assets (photo, resume PDF, social URLs) — update `src/data/portfolio.js`
