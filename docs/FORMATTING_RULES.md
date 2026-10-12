# Formatting, Capitalization, and Spelling Rules

## Core invariant
**Never silently rewrite creative content.** Formatting may normalize clearly identified structural syntax, but prose/dialogue changes require explicit user action or opt-in rules.

## Screenplay formatting
- Parse Fountain structure before formatting; preserve title page, sections, scene numbers, centered text, notes, dual dialogue, forced character/transition syntax and intentional blank lines.
- Uppercase recognized completed scene headings: `int. robotics lab - night` -> `INT. ROBOTICS LAB - NIGHT`.
- Uppercase recognized character cues and suffixes: `bri (v.o.)` -> `BRI (V.O.)`.
- Uppercase recognized transitions: `cut to:` -> `CUT TO:` when parsed as transition.
- Parentheticals remain as authored: `(whispering)`.
- Do not infer a character cue solely from uppercase text; rely on parser position/explicit syntax.
- Do not reformat unfinished `INT.` while typing. Trigger on Enter, explicit format, or configured save rules.
- First character introduction in action may be suggested as uppercase; do not silently rewrite it.

## Manuscript formatting
- Markdown headings and paragraph breaks stay semantic; never insert print layout tabs/margins into source.
- Preserve emphasis, fenced code, lists, links, images, footnotes, blockquotes, thematic breaks and deliberate whitespace where meaningful.
- Typography (indents, page breaks, trim size, running headers) belongs to preview/export.
- Smart quotes/dashes and sentence-case assistance should be opt-in or suggestion-based.

## Capitalization
- Screenplay structural capitalization can be automatic after unambiguous completion.
- Sentence-initial capitalization in action/dialogue/manuscript text is optional and conservative.
- Preserve proper casing (`iPhone`, `macOS`, `O'Brien`, `McDonald`), acronyms, dialect, intentional lowercase, initials, abbreviations, and ellipses.
- Avoid edits inside code fences, URLs, metadata, or markup tokens.

## Spell check
- Evaluate embedded CSpell library for local diagnostics and candidate suggestions.
- Support global and per-project custom dictionaries, accepted character/location names, language selection and ignore ranges.
- Respect possessives, hyphenation, foreign phrases, dialogue dialect, Markdown code blocks, Fountain structural tokens, links and emails.
- Quick Fixes should suggest, add to dictionary, or ignore; never auto-replace on save.
- Grammar checking is separate, deferred, and opt-in if it requires external services.

## Idempotence and edit safety
- `format(format(document)) === format(document)`.
- Return minimal edits, preserve line endings and document encoding, preserve selection/undo behavior where possible.
- Never apply stale edits when `TextDocument.version` has changed.
- Default formatting mode: explicit command; optional format-on-save; conservative on-type structural rules.

## Example settings (proposed, not implemented)
```json
{
  "plotline.writingMode.autoActivate": true,
  "plotline.spellCheck.enabled": true,
  "plotline.screenplay.smartFormatting": true,
  "plotline.capitalization.sceneHeadings": true,
  "plotline.capitalization.characterCues": true,
  "plotline.capitalization.proseSentences": false,
  "plotline.formatting.onSave": false
}
```
