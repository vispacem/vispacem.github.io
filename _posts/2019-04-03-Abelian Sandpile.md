---
title: Abelian Sandpile
date: 2019-04-03 23:15:09 +0000
key: 20190403
tags: Abelian Sandpile
---

## Abelian Sandpile





<script type="module">
  // Load the Observable Runtime.
  import { Runtime } from "https://unpkg.com/@observablehq/notebook-runtime?module";
  // Import the notebook.
  import notebook from "https://api.observablehq.com/d/8053a86c4aaa320e.js";
  // Load the notebook, and render any cells which start with "canvas".
  Runtime.load(notebook, (cell) => {
    if (cell.name && cell.name.startsWith('rendered_')) {
      return {
        fulfilled: (value) => {
          if (value instanceof HTMLElement) {
            document.body.appendChild(value);
          }
        }
      };
    }
  });
</script>

