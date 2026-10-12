# Smart Writing Specification

## Goal
Offer IDE-like assistance for creative writing, especially Fountain screenplays, without requiring AI or network access.

## Completion contexts
- At start of screenplay scene: `INT.`, `EXT.`, `INT./EXT.`, and optionally `EST.` (configurable).
- After scene prefix: suggest previously used locations.
- After location separator: suggest `DAY`, `NIGHT`, `MORNING`, `EVENING`, etc.
- In character cue position: suggest known character names and `(V.O.)`, `(O.S.)`, `(CONT'D)` extensions where appropriate.
- In transition position: suggest `CUT TO:`, `FADE OUT:`, etc.
- Never suggest character cues indiscriminately inside dialogue or action.

## Smart Enter/Tab
Use explicit commands or context-aware keybindings scoped to Fountain editor focus. Respect completion widgets, snippets, selections, IME composition and user overrides. Avoid hijacking standard keyboard behavior in unrelated languages.

## Templates
- New film screenplay with optional Fountain title page.
- New episodic TV script with configurable teaser, acts and tag; do not impose one act structure.
- New novel/nonfiction project with Markdown chapters and metadata.

## Project intelligence
Index character cues, scene headings, locations, acts/sections, and known project terms. Rebuild incrementally as files change. Offer document symbols and navigation. Contextual rename must only touch actual parsed character cues unless user explicitly opts into broader occurrences.

## Example Fountain
```fountain
Title: Pilot
Credit: Written by
Author: Author Name

# TEASER

INT. ROBOTICS LAB - NIGHT

Quinn checks the wiring.

BRI (O.S.)
Are you still here?

QUINN
Just one more minute.
```

## Privacy
All baseline completions and snippets are deterministic and offline. No AI generation required.
