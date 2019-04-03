---
title: Abelian Sandpile
date: 2019-04-03 23:15:09 +0000
key: 20190403
tags: Abelian Sandpile
---

## Abelian Sandpile

<div class="notebook-content">
  
</div>

<script type="module"> 

import notebook from "https://api.observablehq.com/d/8053a86c4aaa320e.js";  //  "download code" url

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
