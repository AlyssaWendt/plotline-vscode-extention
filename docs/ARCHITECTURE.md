# Technical Architecture

## Stack
- Extension host: TypeScript + VS Code Extension API
- UI: React + Vite + SCSS in webviews **only where native views are insufficient**
- Build: esbuild (extension host), Vite (webviews)
- Parsing: unified/remark for Markdown; evaluate maintained Fountain parsers or implement a small spec-driven parser with fixtures
- Spell check: evaluate `cspell-lib` for embedded local diagnostics and dictionary management; verify API and bundle/license fit
- Export: Markdown/Fountain -> semantic intermediate representation -> layout -> EPUB/PDF; choose implementation libraries after proof of concept
- Tests: Vitest for pure logic, `@vscode/test-electron` for integration
- No server or database in MVP

## Boundaries
`extension/`: commands, VS Code language registrations, tree views, diagnostics, settings, workspace access, webview messaging.

`core/`: parsers, typed document model, formatter rules, capitalization, dictionary/spelling adapters, exporters. Prefer no `vscode` imports.

`webview/`: React previews and optional project dashboard; communicates through typed request/response messages. Never assume Node APIs in webview.

`shared/`: schema types and typed message protocol.

## Document processing pipeline
1. Read current in-memory `TextDocument` content and version.
2. Parse into a structured representation with source ranges.
3. Compute contextual completions, formatting edits, capitalization suggestions, and spelling ranges separately.
4. Revalidate document version before applying edits or publishing diagnostics.
5. Apply minimal `WorkspaceEdit` / `TextEdit` only through explicit or configured triggers; never replace the whole file unnecessarily.
6. Render preview/export from parsed content, with export-specific layout rules.

## VS Code integrations
- `registerCommand` and `StatusBarItem` for mode switching
- `TreeDataProvider` for project explorer
- `CompletionItemProvider`, `SnippetString`, `DocumentSymbolProvider`, `RenameProvider` for screenplay intelligence
- `DocumentFormattingEditProvider` / `DocumentRangeFormattingEditProvider` for formatting
- `DiagnosticCollection` and `CodeActionProvider` for spelling suggestions
- `workspace.onDidChangeTextDocument` with debounce and cancellation for analysis
- `WebviewPanel` / `WebviewViewProvider` for previews, CSP and safe HTML handling

## Writing mode safety
Do not change global user settings. Limit modifications to Plotline-owned UI and per-workspace state; avoid claiming exact restoration of all VS Code layout state (not fully exposed by API). Support manual mode toggle and optional auto-detection of `plotline.json`. Detect `.md`/`.fountain` context and avoid changing unrelated documents. If adding custom language IDs, scope association to intended files and preserve Markdown tooling compatibility.

## Export approach
Markdown -> semantic HTML/CSS -> EPUB; PDF proof of concept via a renderer that can be packaged and supported across desktop platforms. Do not assume browser print-to-PDF APIs are available inside VS Code webviews. Screenplay PDF requires dedicated layout tests for dialogue indentation, continuations, dual dialogue, page breaks and page numbering. Avoid bundling massive browser runtimes without explicit approval.

## Security
Respect workspace trust; sanitize Markdown and script preview output; restrict webview CSP and local resources; validate file paths; do not execute document content; avoid external links/assets by default; avoid shipping unpublished manuscripts to remote services.
