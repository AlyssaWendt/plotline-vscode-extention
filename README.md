# Plotline

**A creative writing extension for Visual Studio Code.**

Plotline turns VS Code into a writing-friendly environment for novels, eBooks, screenplays, and episodic television scripts without disrupting normal development workflows.

## Product goals
- One-click writing-mode toggle and project-aware activation
- Native VS Code editing of Markdown manuscripts and Fountain screenplays
- Smart screenplay snippets, completions, contextual capitalization, and formatting
- Built-in spell-check diagnostics and project dictionaries
- Chapter/scene explorer and live previews
- PDF screenplay/manuscript export and EPUB book export
- Local-first, portable source files, offline MVP

## Status
M0 (repository scaffold) complete. All other features below are **planned**, not implemented. See [docs/IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md) for milestone status.

## Documentation
Start with [Product Requirements](docs/PRODUCT_REQUIREMENTS.md), [Architecture](docs/ARCHITECTURE.md), and [Implementation Plan](docs/IMPLEMENTATION_PLAN.md). Coding agents should read [AGENTS.md](AGENTS.md).

## Development

```bash
npm install          # install dependencies
npm run typecheck    # TypeScript type checking
npm run lint         # ESLint
npm run test:unit    # Vitest unit tests (core/ logic)
npm run test:integration  # headless VS Code integration tests
npm test             # unit + integration tests
npm run compile      # typecheck + esbuild bundle to dist/
npm run watch        # esbuild in watch mode
```

To run the extension itself, open this folder in VS Code and press `F5` (Run Extension) to launch an Extension Development Host, then run **Plotline: Hello World** from the Command Palette.
