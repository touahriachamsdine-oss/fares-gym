# Gym App Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (- [ ]) syntax for tracking.

**Goal:** Build full-stack gym management app (Owner/Coach/Member) with AR/FR/EN, black+red doom-eternal theme.

**Architecture:** Monorepo (frontend Vite+React+TS, backend Fastify+TS) REST API, JWT RBAC, file uploads, Postgres. Minimal vertical slices TDD.

**Tech Stack:** Fastify, Prisma/Postgres, Zod, JWT, Multer, Vite, React, TS, Tailwind, i18next, react-i18next, lucide-react, date-fns.

**Spec:** docs/superpowers/specs/2026-10-06-gym-app-design.md

## Global Constraints
- TypeScript strict mode
- Black (#000000) + Red (#D62828/#FF1E1E) theme only
- AR/FR/EN i18n; RTL for Arabic
- Cash-only payments (type=payment/sale)
- Invite-only (no public signup)
- RBAC: owner/coach/member enforced server+client
- Upload user pics + machine/equipment pics
- Minimal, focused files, YAGNI

---

### Task 1: Project scaffolding (monorepo)

**Files:**
- Create: `package.json`
- Create: `tsconfig.base.json`
- Create: `.gitignore`
- Create: `backend/package.json`
- Create: `backend/tsconfig.json`
- Create: `frontend/package.json`
- Create: `frontend/tsconfig.json`
- Create: `frontend/vite.config.ts`

**Interfaces:**
- Consumes: none
- Produces: workspace scripts, base TS config

- [ ] **Step 1: Write package.json (root)**
### Task 1 (cont)

### Task 2: Backend core (Fastify + health + config)

**Files:**
- Create: ackend/src/config/env.ts
- Create: ackend/src/app.ts
- Create: ackend/src/server.ts
- Create: ackend/src/routes/health.ts
- Modify: ackend/package.json (deps if needed)

**Interfaces:**
- Consumes: none
- Produces: uildApp(), health route

- [ ] Step 1: Write failing test idea (conceptually) - ensure app boots
- [ ] Step 2: env.ts
- [ ] Step 3: app.ts with health
- [ ] Step 4: server.ts
- [ ] Step 5: typecheck/build
- [ ] Step 6: Commit

### Task 3: Prisma + DB schema (users, members, transactions, items, sales, routines, workouts, equipment)

**Files:**
- Create: `backend/prisma/schema.prisma`
- Create: `backend/.env.example`
- Create: `backend/src/lib/prisma.ts`
- Modify: `backend/package.json` (prisma deps)

**Interfaces:**
- Consumes: Task 2
- Produces: Prisma models + client singleton

- [ ] Step 1: Add deps (prisma, @prisma/client)
- [ ] Step 2: schema.prisma with enums Role, TxnType
- [ ] Step 3: prisma.ts singleton
- [ ] Step 4: .env.example
- [ ] Step 5: generate types (typecheck)
- [ ] Step 6: Commit

### Task 4: Auth (JWT) + RBAC + invite-only user creation (owner bootstrap)

**Files:**
- Create: `backend/src/utils/password.ts`
- Create: `backend/src/utils/jwt.ts`
- Create: `backend/src/middlewares/auth.ts`
- Create: `backend/src/middlewares/rbac.ts`
- Create: `backend/src/routes/auth.ts`
- Create: `backend/src/schemas/auth.ts`

**Interfaces:**
- Consumes: Task 2-3
- Produces: login, invite/create user (owner/coach), me, guards

- [ ] Step 1: password hash/compare
- [ ] Step 2: jwt sign/verify
- [ ] Step 3: auth/rbac middlewares (roles owner/coach/member)
- [ ] Step 4: auth routes (POST /auth/login, POST /auth/invite requires owner/coach? owner creates; invite-only)
- [ ] Step 5: tests (basic)
- [ ] Step 6: Commit

### Task 5: Members + cash payments + debts (balances)

**Files:**
- Create: `backend/src/routes/members.ts`
- Create: `backend/src/routes/transactions.ts`
- Create: `backend/src/services/balance.ts`
- Create: `backend/src/schemas/members.ts`
- Create: `backend/src/schemas/transactions.ts`

**Interfaces:**
- Consumes: Tasks 2-4
- Produces: member CRUD, record cash payment (type payment), sale (type sale), balance calc

- [ ] Step 1: balance service (increment/decrement, compute member balance)
- [ ] Step 2: members routes (CRUD, owner/coach manage)
- [ ] Step 3: transactions (record cash payment, record sale, list by member)
- [ ] Step 4: enforce cash-only, RBAC
- [ ] Step 5: Commit

### Task 6: Items + Sales (sell stuff, attach to member)

**Files:**
- Create: `backend/src/routes/items.ts`
- Create: `backend/src/routes/sales.ts`
- Create: `backend/src/schemas/items.ts`
- Create: `backend/src/schemas/sales.ts`

**Interfaces:**
- Consumes: Task 5
- Produces: items catalog, record sale affects member balance if unpaid? cash sales tracked.

- [ ] Step 1: items CRUD (owner/coach)
- [ ] Step 2: sales (create sale for member, qty*price)
- [ ] Step 3: link to transactions (type sale)
- [ ] Step 4: Commit

### Task 7: Routines + workouts (owner/coach edit, members view)

**Files:**
- Create: `backend/src/routes/routines.ts`
- Create: `backend/src/routes/workouts.ts`
- Create: `backend/src/schemas/routines.ts`
- Create: `backend/src/schemas/workouts.ts`

**Interfaces:**
- Consumes: Tasks 2-4
- Produces: routines CRUD (owner/coach), assign to members, workouts log

- [ ] Step 1: routines (owner/coach create/update/delete, publish)
- [ ] Step 2: workouts (member log own, coach view assigned)
- [ ] Step 3: RBAC checks
- [ ] Step 4: Commit

### Task 8: Equipment + uploads (user pics + machine pics)

**Files:**
- Create: `backend/src/routes/equipment.ts`
- Create: `backend/src/routes/uploads.ts`
- Create: `backend/src/schemas/equipment.ts`
- Create: `backend/src/lib/upload.ts`
- Create: `backend/static/uploads/.gitkeep`

**Interfaces:**
- Consumes: Tasks 2-4
- Produces: equipment CRUD + image uploads, serve static

- [ ] Step 1: upload lib (multer, size/type limits)
- [ ] Step 2: uploads endpoints (auth required, owner/coach)
- [ ] Step 3: equipment CRUD with photos
- [ ] Step 4: static serving
- [ ] Step 5: Commit

### Task 9: Frontend theme + i18n (AR/FR/EN, black+red, doom font)

**Files:**
- Create: `frontend/src/index.css`
- Create: `frontend/src/main.tsx`
- Create: `frontend/src/App.tsx`
- Create: `frontend/src/i18n/index.ts`
- Create: `frontend/src/i18n/locales/ar.json`
- Create: `frontend/src/i18n/locales/fr.json`
- Create: `frontend/src/i18n/locales/en.json`
- Create: `frontend/tailwind.config.js`
- Create: `frontend/postcss.config.js`

**Interfaces:**
- Consumes: none (UI shell)
- Produces: theme tokens, i18n config, RTL support

- [ ] Step 1: Tailwind config (colors black/red, fonts)
- [ ] Step 2: index.css (doom-like base, RTL aware)
- [ ] Step 3: i18n (ar/fr/en, direction)
- [ ] Step 4: App shell + language toggle
- [ ] Step 5: Commit

### Task 10: Frontend auth + routes + RBAC guards

**Files:**
- Create: `frontend/src/lib/api.ts`
- Create: `frontend/src/context/AuthContext.tsx`
- Create: `frontend/src/components/ProtectedRoute.tsx`
- Create: `frontend/src/pages/Login.tsx`
- Create: `frontend/src/routes.tsx`
- Modify: `frontend/src/App.tsx`

**Interfaces:**
- Consumes: Task 9, backend auth
- Produces: login, auth state, route guards

- [ ] Step 1: api client (axios or fetch)
- [ ] Step 2: AuthContext
- [ ] Step 3: ProtectedRoute (roles)
- [ ] Step 4: Login page (AR/FR/EN)
- [ ] Step 5: routes.tsx
- [ ] Step 6: Commit

### Task 11: Frontend dashboards (owner/coach/member) + cash/payments UI

**Files:**
- Create: `frontend/src/pages/Dashboard.tsx`
- Create: `frontend/src/pages/Members.tsx`
- Create: `frontend/src/pages/Payments.tsx`
- Create: `frontend/src/components/BalanceBadge.tsx`

**Interfaces:**
- Consumes: Task 10
- Produces: role-based dashboards, record cash payment, view balances

- [ ] Step 1: Dashboard by role
- [ ] Step 2: Members list + create/invite (owner/coach)
- [ ] Step 3: Payments (record cash payment)
- [ ] Step 4: i18n strings
- [ ] Step 5: Commit

### Task 12: Sales + items + routines + equipment UI + uploads

**Files:**
- Create: `frontend/src/pages/Items.tsx`
- Create: `frontend/src/pages/Sales.tsx`
- Create: `frontend/src/pages/Routines.tsx`
- Create: `frontend/src/pages/Equipment.tsx`
- Create: `frontend/src/components/ImageUpload.tsx`

**Interfaces:**
- Consumes: Task 11
- Produces: sell items, manage routines (owner/coach), view (member), equipment gallery + uploads

- [ ] Step 1: Items CRUD UI
- [ ] Step 2: Sales UI (sell to member)
- [ ] Step 3: Routines UI (edit by coach/owner, view by member)
- [ ] Step 4: Equipment gallery + upload pics (user/machine)
- [ ] Step 5: Commit

### Task 13: Connect backend routes + wire app + smoke tests

**Files:**
- Modify: `backend/src/app.ts` (register routes)
- Create: `backend/src/routes/index.ts`
- Modify: `frontend/src/lib/api.ts` (endpoints)

**Interfaces:**
- Consumes: Tasks 5-8,10-12
- Produces: wired API surface

- [ ] Step 1: register routes (health, auth, members, transactions, items, sales, routines, workouts, equipment, uploads)
- [ ] Step 2: frontend api endpoints
- [ ] Step 3: typecheck + build
- [ ] Step 4: Commit

---

## Execution
Plan complete and saved. Use subagent-driven-development or executing-plans to run task-by-task.
