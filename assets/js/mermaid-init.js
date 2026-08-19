import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    darkMode: true,
    background: "#2F3437",
    primaryColor: "#0E1523",
    primaryTextColor: "#CDDCF9",
    primaryBorderColor: "#77A3E8",
    lineColor: "#D2D2D2",
    textColor: "#EBEBEB",
    edgeLabelBackground: "#1D1D1D",
  },
  themeCSS: `
    .edgeLabel rect { fill: #1D1D1D !important; }
    .edgeLabel div, .edgeLabel span {
      color: #e8e8e8 !important;
      background-color: transparent !important;
    }
    .edgeLabel { background-color: #1D1D1D !important; }
  `,
});

const nodePalettes = {
  root: { fill: "#0E1523", stroke: "#77A3E8", text: "#CDDCF9" },
  surface: { fill: "#0B1208", stroke: "#79A472", text: "#CFDFCB" },
  main: { fill: "#0B1208", stroke: "#79A472", text: "#CFDFCB" },
  human: { fill: "#1A0F05", stroke: "#BB834A", text: "#E7CFBB" },
  help: { fill: "#1A0F05", stroke: "#BB834A", text: "#E7CFBB" },
};

function setImportant(element, property, value) {
  element?.style.setProperty(property, value, "important");
}

function applyBaselinePalette(svg) {
  for (const [className, palette] of Object.entries(nodePalettes)) {
    for (const node of svg.querySelectorAll(`g.node.${className}`)) {
      const shape = node.querySelector(
        ":scope > rect, :scope > polygon, :scope > circle, :scope > ellipse, :scope > path",
      );

      setImportant(shape, "fill", palette.fill);
      setImportant(shape, "stroke", palette.stroke);

      for (const label of node.querySelectorAll(".nodeLabel, .nodeLabel *")) {
        setImportant(label, "color", palette.text);
        setImportant(label, "fill", palette.text);
        setImportant(label, "-webkit-text-fill-color", palette.text);
      }

      for (const text of node.querySelectorAll("text, tspan")) {
        setImportant(text, "fill", palette.text);
      }
    }
  }

  for (const path of svg.querySelectorAll(".flowchart-link")) {
    setImportant(path, "stroke", "#D2D2D2");
  }

  for (const marker of svg.querySelectorAll("marker path, .arrowMarkerPath")) {
    setImportant(marker, "fill", "#D2D2D2");
    setImportant(marker, "stroke", "#D2D2D2");
  }

  for (const edgeLabel of svg.querySelectorAll(".edgeLabel")) {
    setImportant(edgeLabel, "color", "#E8E8E8");
    setImportant(edgeLabel, "background-color", "#1D1D1D");

    for (const label of edgeLabel.querySelectorAll("div, span, p")) {
      setImportant(label, "color", "#E8E8E8");
      setImportant(label, "fill", "#E8E8E8");
      setImportant(label, "background-color", "#1D1D1D");
      setImportant(label, "-webkit-text-fill-color", "#E8E8E8");
    }

    for (const background of edgeLabel.querySelectorAll("rect")) {
      setImportant(background, "fill", "#1D1D1D");
    }
  }
}

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

  for (const svg of document.querySelectorAll(".mermaid svg")) {
    applyBaselinePalette(svg);
  }
}
