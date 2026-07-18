<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Español Diario repository contract

- `docs/` is the architecture and product contract; keep it synchronized with implementation.
- `temp/` is a local reference prototype and must stay ignored by Git.
- Preserve functional parity with the prototype before changing product behavior or daily workload.
- Use official generators and CLIs for Next.js, shadcn/ui, and Prisma.
- Prefer Server Components; keep Client Components at the smallest interactive boundary.
- PostgreSQL is the source of truth for progress. `localStorage` may only select a family profile or hold UI preferences.
- Keep database access behind `src/lib/db.ts` or focused server-side repositories.
- Run `npm run verify` and `npm run docker:config` before handing off scaffold or infrastructure changes.
- Do not add Graphify hooks. If Graphify is introduced later, refresh it explicitly and verify it with a real query.
