# Proposed Repository Structure

```text
plotline/
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── docs/
│   ├── PRODUCT_REQUIREMENTS.md
│   ├── ARCHITECTURE.md
│   ├── PROJECT_STRUCTURE.md
│   ├── SMART_WRITING.md
│   ├── FORMATTING_RULES.md
│   ├── EDGE_CASES.md
│   └── IMPLEMENTATION_PLAN.md
├── src/
│   ├── extension/
│   │   ├── extension.ts
│   │   ├── commands/
│   │   ├── providers/
│   │   ├── services/
│   │   └── workspace/
│   ├── core/
│   │   ├── models/
│   │   ├── parsers/
│   │   ├── formatting/
│   │   ├── language/
│   │   ├── project/
│   │   └── exporters/
│   ├── webview/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── styles/
│   └── shared/
│       ├── messages.ts
│       └── types.ts
├── test/
│   ├── fixtures/
│   ├── unit/
│   └── integration/
├── media/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── eslint.config.js
```

This is a **target layout**, not a claim that implementation files exist yet. Keep providers and services focused; colocate unit tests if that becomes preferable. Use package scripts for build, typecheck, lint, unit tests and integration tests.

## Example writer workspace
```text
my-story/
├── plotline.json
├── chapters/
│   ├── 01-opening.md
│   └── 02-first-day.md
├── scripts/
│   └── pilot.fountain
├── characters/
│   ├── quinn.md
│   └── bri.md
└── notes/
    └── outline.md
```

Project metadata controls ordering and types, not filenames alone. Never assume `01-` numbering is authoritative.
