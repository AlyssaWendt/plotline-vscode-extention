# Plotline — Agent Instructions

Plotline is **only a VS Code extension**, not a standalone app or hosted service. Read `docs/PRODUCT_REQUIREMENTS.md`, `docs/ARCHITECTURE.md`, `docs/FORMATTING_RULES.md`, and `docs/IMPLEMENTATION_PLAN.md` before implementing features.

## Engineering rules
- Use TypeScript, VS Code Extension API, and React + Vite only for rich webviews. Use the native text editor for manuscript/script editing.
- Keep the core parsers, formatting, spelling, and export logic independent from VS Code where practical.
- Manuscripts use `.md`; screenplays use `.fountain`; project metadata uses `plotline.json`.
- No backend, database, telemetry, cloud dependency, or AI requirement in MVP.
- Preserve user text and undo history. Never silently rewrite dialogue, prose, or intentional stylistic choices.
- Scope all writing-specific behaviors to supported writing documents and/or Plotline projects; never affect code files.
- Keep formatting idempotent, make minimal edits, preserve cursor/selection, and respect user settings.
- Prefer `workspace.fs` and `Uri` APIs over assuming local filesystem paths; account for remote workspaces and workspace trust.
- Write unit tests for parsing and formatting; extension integration tests for VS Code providers and mode switching.
- Build incrementally; do not implement later milestones before foundational functionality works.

## Work process
Before each change: state the milestone, files to change, and acceptance criteria. After changes: run typecheck, lint, relevant tests, and report limitations. Ask before adding heavy dependencies or changing file formats. Follow `docs/IMPLEMENTATION_PLAN.md`.
