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