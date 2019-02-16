---
title: OSCAR-100 Wideband Spectrum Monitor with Vega-lite
date: 2019-02-16 23:15:09 +0000
key: 20190216
tags: websockets vega-lite
---

## Wideband Spectrum Monitor with Vega-lite

Very easy way to display websockets with vega-lite

<div class="notebook-content">
  
</div>

<script type="module"> 

import notebook from "https://beta.observablehq.com/d/40603915d17a847a";  

document.querySelector('.notebook-content').innerHTML =notebook.modules[0].variables
.filter(d=>d)
.map((d,i)=>` <div class=" observable-wrapper div-number-${i}"></div>`)
.join(''); 

import {Inspector, Runtime} from "https://unpkg.com/@observablehq/runtime@3/dist/runtime.js"; 
let i=1;
Runtime.load(notebook, (variable) => { 
  return new Inspector(document.querySelector(`.observable-wrapper:nth-child(${i++})`));
 }); 


</script>

 

