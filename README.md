# Tāttvika Project

<div>
  <img align="right" src="assets/vitruvian-man-wiki.jpg" alt="Description" width="300" style="margin-left: 20px;"/>
  <h3>An experiment in independent theoretical research and open-access teaching</h3>
  <p>Tāttvika is a platform and workflow designed to sustain intellectual agency outside institutional academia. It asks: <i>Can the lack of institutional support be compensated by affordable, thoughtful use of AI?</i> The project explores whether rigorous theoretical work—grounded in the foundations of physics and mathematics—can thrive through independence, and whether that independence can yield meaningful contributions to society.

This is not merely a research initiative; it is a test of whether freedom from institutional constraints, combined with modern tools, can sustain a life of the mind.</p>
<p style="text-align: center; font-size: 12px; margin: 5px 0 0 0;"><i>Picture courtesy: Wikimedia Commons</i></p>
</div>

---

## Tāttvika Web ([www.tattvika.org](https://www.tattvika.org))

A Next.js-based platform for research dissemination, technical blogging, and open-access teaching.

### Multi-Environment Publishing Pipeline

Tāttvika features a unique **single-source-of-truth** architecture where content originates as JSON and syncs bidirectionally across multiple typesetting environments:

```
         JSON (source of truth)
              │
    ┌─────────┼─────────┐
    ↓         ↓         ↓
   Web      LaTeX     Quarto
  (HTML)    (.tex)    (.qmd)
```

**How it works:**
- Content is initiated via web form (JSON)
- Automatically syncs to LaTeX and Quarto environments for editing
- Authors can edit in any environment (LaTeX for arXiv submission, Quarto for rich visual editing)
- Single-key sync back to JSON truth, which then propagates to all other formats
- Supports heavy math rendering across all environments

**Status:** LaTeX-JSON-Quarto mapping completed and tested on math-heavy content. Platform in active development—public launch coming soon.

---

## The Uni Collective

A distributed research environment where AI agents function as specialist collaborators—literature analysts, writers, system developers—working alongside human direction.

### Research Pipeline

```
Research → Document Preparation → Refinement & Formatting → Web / arXiv Publication
```

The Uni Collective supports an end-to-end workflow where AI agents assist in exploration, drafting, and refinement—while the human researcher remains actively present at every intellectual step. The Tāttvika Web platform is designed to integrate seamlessly with this pipeline, enabling efficient publication to both web and arXiv from a single source.

- Multi-surface operation (Discord, CLI, IDE-integrated agents)
- Unified contextual memory across all interactions
- Teaching pipeline: in planning

---

## Roadmap

**Completed:**
- LaTeX-JSON-Quarto bidirectional sync architecture
- Math-heavy content rendering pipeline

**Near-term:**
- Public launch of Tāttvika Web platform
- Research workflow optimization with Uni Collective integration

**Exploratory:**
- Teaching platform development
- Selective automation of research reporting and progress tracking

---

## Open Source

All Tāttvika applications—including the web platform, browser extensions, and supporting tools—are open source.

---

## Follow the Evolution

This repository serves as a public log of the project's technical and conceptual development.

*Last updated: March 2026*

Powered by: Gemini, Claude, Kimi K2.5

Supported by: *People of India*
