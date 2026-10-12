# Edge Cases and Test Matrix

## P0 — Data safety and integration
- Formatting or spelling never modifies `.ts`, `.tsx`, `.java`, or unrelated `.md` files unexpectedly.
- Incomplete `INT.` and unfinished character cues are not prematurely rewritten.
- Format twice = same output; no document corruption; changes are undoable.
- Save with unsaved buffers; switching modes must not discard edits.
- Multiple VS Code windows, multi-root workspaces, remote filesystem URIs, untrusted workspaces.
- Coexist with Prettier, Markdown tooling, and other spelling extensions; avoid duplicate or competing default formatters.
- CRLF vs LF, Unicode, non-Latin names, combining marks, surrogate pairs, empty documents.

## P1 — Screenplay semantics
- Uppercase action words are not mistaken for character cues.
- `INT.` in dialogue is not treated as a scene heading.
- `(whispering)` remains parenthetical; `(V.O.)` remains cue extension.
- Dual dialogue (`^`), scene numbers, transitions, forced elements, section headings, title pages.
- Character rename touches cues but not unrelated action/dialogue.
- Long dialogue and page break/continuation handling in PDF.

## P1 — Manuscript and spelling
- Poetry, intentional whitespace, scene break `***`, Markdown code fences, footnotes, images, links, headings.
- Fictional names, apostrophes, possessives, hyphenated terms, dialect, mixed-language passages.
- `Dr. Smith`, initials, ellipses, acronyms, `iPhone`, `macOS`, `O'Brien`.
- Repeated words, malformed Markdown, missing image assets.

## P1 — Performance and export
- 150,000-word manuscript and 120-page script; no full parse on each keystroke.
- Debounce, cancellation and version-check diagnostics; webview preview throttling.
- EPUB metadata/TOC and chapter ordering; PDF trim sizes, fonts, Unicode, margins, widow/orphan and screenplay pagination.
- Failure of renderer dependency: clear actionable error, no silent empty export.

## Later
- Advanced multilingual grammar, complex poetry layout, unusual TV formatting standards, collaboration/conflicts.

## Testing strategy
- Table-driven parser and formatter fixtures (input, expected AST, expected edits).
- Property tests for idempotence and preservation where feasible.
- Integration tests for providers, commands, workspace scoping, diagnostics and keyboard shortcuts.
- Golden output snapshots plus visual inspection for EPUB/PDF layout.
