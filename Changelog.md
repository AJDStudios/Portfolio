## [0.0.1] — “Repo initialized”

    Added .gitignore
    Added Changelog.md
    Added README.md
    Added Project_plan.md
    updated settings for repo
    created first five tickets in issues

## [0.0.2] - 2025-08-20 - "#2 Initialize monorepo & housekeeping"

- Initialize monorepo scaffold, workspace config, and documentation stubs.

## [0.0.3] - 2025-08-21 - "#3 Setup web app scaffold"

- Created `apps/web` with Vite + React + TypeScript scaffold.  
- Configured `tsconfig` for app and node.  
- Installed core dependencies: `react`, `react-dom`, `react-router-dom`.  
- Installed dev dependencies: `vite`, `@vitejs/plugin-react`, `typescript`, `eslint`, `prettier`.  
- Verified dev server, linting, and TypeScript integration.  

## [0.0.4] - 2025-08-21 - "#4 Setup API scaffold"

- Created `apps/api` with Fastify + TypeScript scaffold.  
- Configured separate `package.json` and workspace dependency boundaries.  
- Added core dependencies: `fastify`, `fastify-plugin`, `zod`, `dotenv`.  
- Added dev dependencies: `tsx`, `typescript`, `vitest`, `supertest`.  
- Verified API dev server on `localhost:4000` with `/health` route.  
- Confirmed monorepo root tooling (lint, format, test) applies cleanly across apps.  

## [0.0.5] - 2025-08-21 - "#5 Add CI/CD baseline & branch protection"

- Added GitHub Actions workflow for monorepo: install deps, lint, test, build web & api.
- Enabled branch protection on main (PR + passing checks required).
- Added CI status badge to README.md.
- Enabled Dependabot for npm updates.

## [0.0.6] - 2025-08-22 - "#6 Repo polish & templates"

- Added issue templates: `bug.md`, `feature.md`, `task.md`.  
- Added PR template with checklist (tests, a11y, screenshots if UI).  
- Added `SECURITY.md` and `PRIVACY.md` (linked from README).  
- Created GitHub Project board (Backlog → In Progress → Review → Done).  
- Updated `PROJECT_PLAN.md` with Phase 1–3 bullets and cadence.  
- Updated `README.md` with week 1 status and links.  
- **Note:** This repo will also be cloned and saved as a reusable project template.