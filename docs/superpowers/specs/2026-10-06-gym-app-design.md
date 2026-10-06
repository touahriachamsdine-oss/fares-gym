# Gym App Design Spec (Fares Gym)

**Date:** 2026-10-06
**Path:** docs/superpowers/specs/2026-10-06-gym-app-design.md (relative to project root as planned)
**Type:** Architectural

## Goal
Build a gym management app with Arabic/French/English support, black+red doom-eternal style, hyper-masculine font, for owner to track cash payments, member debts (amounts owed), sell items (track purchases), members/coaches access routines, media uploads.

## Roles
- Owner (full admin)
- Coach (manage routines, member profiles limited)
- Member (view/edit own profile, check routines, view own debts/purchases)

## Core features
- Cash payments tracking (record payment, date, method=cash, notes)
- Debts/amounts owed (member balance, transaction history, settled/unsettled)
- Sales tracking (items sold to members, price, qty, cash, attach to member)
- Routines (owner/coach create/edit; members view; members can mark progress? coaches assign)
- Profiles (create profiles, upload user pics, machines/equipment pics)
- Gallery of gym equipment/machines (so people know what's available)
- i18n AR/FR/EN (RTL for AR)
- Theme: Black #000000 + Red #D62828/#FF1E1E accents, doom eternal hyper-masculine font (suggested: Oswald, Rajdhani, Exo 2, Bebas Neue, Impact-like or custom)
- Manly/doom styling (glow, sharp edges, aggressive)

## Suggested tech (matches B)
- Backend: REST/JSON API (Express + TS or Fastify + TS) with auth (JWT), role-based access
- DB: Postgres (or SQLite for dev; Postgres recommended)
- Frontend: Vite + React + TS + Tailwind (or shadcn/ui) with i18next + framer-motion
- File storage: local uploads (dev) or S3-like; upload user pics + machine pics

## Data model (minimal)
- users (id, name, phone, role, lang, avatar, active, created_at)
- members (user_id, balance, notes)
- transactions (id, member_id, type[income/payment/sale], amount, item_id, note, created_at, by_user)
- items (id, name, price, stock, active)
- sales (id, member_id, item_id, qty, amount, paid_cash, date)
- routines (id, title, level, coach_id, assigned_to[], days[], exercises[] JSON)
- workouts (id, member_id, routine_id, date, sets/reps, done)
- equipment (id, name, desc, photo, location)

## UX
- Dark UI, red accents, bold typography
- Arabic RTL layout
- Quick actions: record payment, add sale, assign routine
- Member view: "My balance", "My routine", "My purchases"

## More functions (suggestions)
- Attendance (check-in/out)
- Membership packages (monthly fee, expiry)
- Reminders (overdue payments)
- SMS/notifications
- Workout history/stats (weight/reps progress)
- PT sessions booking
- Locker assignment
- Expenses (rent/electric) vs income
- Reports (daily cash, member debts, sales)
- QR check-in
- Announcements
- Injury notes

## Next steps
- Implement backend API + DB schema
- Frontend with i18n + theme
- File uploads
- RBAC guards
- Basic CRUD + balances

Return to writing-plans after approval.
