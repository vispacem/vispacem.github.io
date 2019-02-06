---
title: GSM points in Spain
date: 2019-02-06 23:15:09 +0000
tags: cell-towers leafmap
---

## GSM points in Spain from ObservableHQ

Just a few of them.



<div class="notebook-content">
  
</div>

<script type="module"> 

import notebook from "https://api.observablehq.com/@op07n/gsm-points-spain.js";  //  "download code" url

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

 

End.

