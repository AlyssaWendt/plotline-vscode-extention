# Product Requirements

## Scope
Plotline is a VS Code extension only. It supports books, novels, nonfiction manuscripts, film screenplays, and episodic TV scripts. Writers continue to use the native VS Code text editor. Plotline enhances the experience with dedicated views and writing language features.

## File formats
- `.md` for manuscript chapters and notes; preserve Markdown semantics (headings, emphasis, lists, links, images, code blocks, footnotes where supported).
- `.fountain` for scripts; support Fountain conventions including title pages, scene headings, action, character cues, dialogue, parentheticals, transitions, sections, and dual dialogue.
- `plotline.json` for project metadata, document order, export settings, language and dictionaries. Validate and version its schema.
- Do not invent a proprietary manuscript format.

## Functional requirements
1. **Modes:** `Plotline: Toggle Writing Mode` command, status bar indicator, optional auto-activation for Plotline projects; keep coding unaffected. Mode state should be workspace-aware, with clear behavior in multi-root workspaces.
2. **Project explorer:** create projects, add/rename/reorder chapters and scenes, manage notes/characters/locations, navigate documents.
3. **Smart writing:** scene heading completions (`INT.`, `EXT.`, `INT./EXT.`), location/time-of-day suggestions, character cue autocomplete, voice-over/off-screen extensions, transitions, configurable snippets, smart Enter/Tab commands.
4. **Capitalization:** uppercase completed screenplay scene headings and character cues/extensions; preserve parentheticals and creative prose. Optional sentence-initial capitalization with conservative behavior. First character appearance capitalization should be a suggestion, not a silent rewrite.
5. **Formatting:** format selection/document/on-save; structural edits only, idempotent and undoable; no unsolicited prose rewrites.
6. **Spell check:** offline default, diagnostics and Quick Fix suggestions, per-project and personal dictionaries, language preferences, ignore patterns and intentional spelling. Grammar checking is a separate later/optional feature.
7. **Previews:** HTML/React webview book and screenplay previews; previews must be sanitized and synchronized efficiently with documents.
8. **Export:** books to EPUB and print/manuscript PDF; scripts to conventionally laid-out PDF with reliable pagination. Export presets for trim size, margins, title pages and script layout.
9. **Settings:** per-feature toggles, explicit vs on-save formatting, dictionary settings, export presets.

## Nonfunctional requirements
- Offline-first; no network required for baseline features.
- No content upload or telemetry by default.
- Handle large manuscripts, rapid edits, cancellation, remote workspaces, unsaved buffers and multiple VS Code windows.
- Accessible commands and UI; keyboard-first design.
- Clear error messages and non-destructive behavior.

## Non-goals for MVP
Standalone app, collaboration backend, LLM-generated story content, advanced grammar AI, professional typesetting parity with every commercial screenplay app, or custom rich-text editor.

## Definition of done for MVP
A writer can create a project, edit Markdown/Fountain in native VS Code, toggle writing tools without altering code files, get spelling and screenplay completion/capitalization, format safely, preview, and export a usable PDF (and EPUB for books when export milestone is complete).
