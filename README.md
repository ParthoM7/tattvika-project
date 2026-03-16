# Tāttvika Project


  <img align="right" src="assets/vitruvian-man-wiki.jpg" alt="Description" width="300" style="margin-left: 20px;"/>

**Tāttvika is an experiment in independent theoretical research and open-access teaching.** It begins with a simple conviction: the pursuit of truth and the structure of institutional academia are not the same. In an ideal world, they would converge, but in practice, they can diverge uncomfortably, especially in foundational disciplines due to their natural abstractness and lack of tangibility.[^1][^2][^3][^4][^5]

This project aims to explore whether rigorous intellectual work can survive outside institutional academia and remain open-access and socially meaningful. It seeks to experiment with the possibility of compensating for the loss of institutional support through a disciplined and affordable use of AI.

Rooted in theoretical physics and foundational reflection on science and academia in general, Tāttvika is an attempt to turn independence into a viable condition for thought.


*Picture courtesy: Wikimedia Commons*

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

**Status:** LaTeX-JSON-Quarto mapping completed and tested on math-heavy content. Platform in active development.

---

## The Uni Collective

The Uni Collective is a team of purpose-built AI agents—each with a specialized role (research, literature analysis, writing, system development)—that work under human direction to support independent research. 

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
 - Inaugural research post: a symmetry-preserving UV cutoff in quantum field theory

**Exploratory:**
- Teaching platform development
- Selective automation of research reporting and progress tracking

---

## Open Source

All Tāttvika applications—including the web platform, browser extensions, and supporting tools—are open source.

---

## Follow the Evolution

This repository serves as a public log of the project's technical and conceptual development.

---
*Last updated: March 2026*


<div>
  <h3>References</h3>
</div>

[^1]: “Robert K. Merton, The Normative Structure of Science (1942).” Accessed March 15, 2026. https://www.panarchy.org/merton/science.html.

[^2]: Smaldino, Paul E., and Richard McElreath. “The Natural Selection of Bad Science.” Royal Society Open Science 3, no. 9 (2016): 160384. https://doi.org/10.1098/rsos.160384.

[^3]: Ioannidis, John P. A. “Why Most Published Research Findings Are False.” PLOS Medicine 2, no. 8 (2005): e124. https://doi.org/10.1371/journal.pmed.0020124.

[^4]: Ellis, George, and Joe Silk. “Scientific Method: Defend the Integrity of Physics.” Nature 516, no. 7531 (2014): 321–23. https://doi.org/10.1038/516321a.

[^5]: Hossenfelder, Sabine. Lost in Math: How Beauty Leads Physics Astray. Basic Books, 2018.


