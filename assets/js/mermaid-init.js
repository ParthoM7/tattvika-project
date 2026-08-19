import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    darkMode: true,
    background: "#1E1E1E",
    lineColor: "#888888",
  },
  themeCSS: `
    .node.root rect, .node.root polygon { fill: #1D263B !important; }
    .node.surface rect, .node.surface polygon { fill: #1F291E !important; }
    .node.human rect, .node.human polygon { fill: #36261A !important; }

    .nodeLabel, .nodeLabel div, .nodeLabel span, .nodeLabel p {
      color: #e8e8e8 !important;
      fill: #e8e8e8 !important;
    }

    .edgeLabel rect { fill: #1E1E1E !important; }
    .edgeLabel div, .edgeLabel span {
      color: #e8e8e8 !important;
      background-color: transparent !important;
    }
    .edgeLabel { background-color: #1E1E1E !important; }
  `,
});

const mermaidBlocks = document.querySelectorAll("pre code.language-mermaid");

for (const codeBlock of mermaidBlocks) {
  const container = document.createElement("div");
  container.className = "mermaid";
  container.textContent = codeBlock.textContent;

  const wrapper = codeBlock.closest("div.highlighter-rouge") ?? codeBlock.parentElement;
  wrapper.replaceWith(container);
}

if (mermaidBlocks.length > 0) {
  await mermaid.run({ querySelector: ".mermaid" });
}
