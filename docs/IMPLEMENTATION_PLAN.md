# Implementation Plan

Build vertically, milestone by milestone. Each milestone must pass typecheck, lint and tests before starting the next.

## M0 — Repository scaffold
- Scaffold a TypeScript VS Code extension with `yo code` or equivalent official starter.
- Add esbuild, Vitest, ESLint, integration test harness, README, license decision, CI skeleton.
- Confirm F5 Extension Development Host runs.
**Acceptance:** extension activates, command runs, tests pass.

## M1 — Writing mode and project discovery
- Register `Plotline: Toggle Writing Mode` and status bar indicator.
- Persist workspace-aware mode state; optional `plotline.json` detection.
- No global VS Code settings changes or coding file modifications.
**Acceptance:** switching modes is reversible and does not disrupt code editing.

## M2 — Projects and navigation
- Define/version `plotline.json` schema, create Markdown/Fountain project templates.
- Tree view for chapters/scenes; add/rename/open/reorder via metadata.
**Acceptance:** writer can create/open/navigate a project and files remain portable.

## M3 — Fountain intelligence
- Fountain parser with source ranges and fixtures.
- Scene/location/character completions, snippets, smart Enter, symbols.
- Structural capitalization and safe format-document/selection commands.
**Acceptance:** no unwanted edits to action/dialogue or incomplete syntax; formatter idempotent.

## M4 — Manuscript formatting and spell check
- Markdown parse, safe structural formatting, spelling diagnostics/Quick Fixes.
- Global/project dictionaries, ignore ranges and settings.
**Acceptance:** custom terms persist; prose is never silently replaced.

## M5 — Previews
- React/Vite webview previews for manuscript and screenplay.
- Typed host/webview messaging, CSP, sanitization, incremental updates.
**Acceptance:** preview reflects unsaved buffer safely and performs on large files.

## M6 — Export
- Prototype Markdown -> HTML -> EPUB and print PDF.
- Fountain -> screenplay PDF with pagination fixtures and manual visual checks.
- Export presets and actionable errors.
**Acceptance:** valid EPUB and legible correctly structured PDFs across supported platforms.

## M7 — Polish and Marketplace
- Accessibility, performance, docs, settings UI, license/dependency audit, packaging, release workflow.
- Verify Windows/macOS/Linux and remote-workspace behavior where supported.
**Acceptance:** VSIX installs and runs in clean VS Code environment.

## Suggested first agent task
> Read AGENTS.md and docs/PRODUCT_REQUIREMENTS.md, ARCHITECTURE.md, and IMPLEMENTATION_PLAN.md. Implement **M0 only**: scaffold the VS Code extension, add TypeScript/esbuild/Vitest/ESLint and an activation command, plus one unit and one extension integration test. Do not build webviews, parsers or exports yet. Report files created, commands to run, test results and open decisions.

## Decisions to validate before implementation
- Exact Fountain parser/library and spec compliance
- PDF rendering packaging and platform support
- EPUB generation library and validation workflow
- Scope of custom language IDs vs existing Markdown/Fountain extensions
- License, Marketplace publisher identity and extension name availability
