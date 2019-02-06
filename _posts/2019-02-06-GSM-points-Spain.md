---
title: GSM points in Spain
date: 2019-02-06 23:15:09 +0000
tags: cell-towers leafmap
---

## GSM points in Spain from ObservableHQ

Just a few of them.


<link rel="stylesheet" type="text/css" href="https://unpkg.com/@observablehq/notebook-inspector@1/dist/notebook-inspector-style.css">
<body>
<script type="module">

import {Inspector, Runtime} from "https://unpkg.com/@observablehq/notebook-runtime@1?module";
import notebook from "{{ base.url | prepend: site.url }}/assets/GSM-points-Spain/gsm-points-spain.js";

Runtime.load(notebook, Inspector.into(document.body));

</script>

End.

