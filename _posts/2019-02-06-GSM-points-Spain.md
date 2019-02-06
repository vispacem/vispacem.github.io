---
title: GSM points in Spain
date: 2019-02-06 23:15:09 +0000
tags: cell-towers leafmap
---

## GSM points in Spain from ObservableHQ

Just a few of them.


<div id="visual"></div>

<link href='${resolve('leaflet@1.3.1/dist/leaflet.css')}' rel='stylesheet' />
<link href='${resolve('https://unpkg.com/leaflet.markercluster@1.0.3/dist/MarkerCluster.Default.css')}' rel='stylesheet' />
<p>loading: <b>leaflet.css</b></p>

<script type="module">

  // NOTEBOOK CONFIGURATION
  
  import notebook from "{{ base.url | prepend: site.url }}/assets/GSM-points-Spain/gsm-points-spain.js";
  

  const target = document.querySelector("#visual");
  const renders = {
    "map": "div.fullwidth",
  };

  // BOILERPLATE
  import {Inspector, Runtime} from "https://unpkg.com/@observablehq/notebook-runtime@2.0.0/src/module";
  for (let i in renders) {
    let s = renders[i], a = s.match(/^\w+/);
    if (a) {
      renders[i] = document.createElement(a[0]);
      target.appendChild(renders[i]);
      if (a = s.match(/\.(\w+)$/))
        renders[i].className = a[1]; 
    }
    else
      renders[i] = document.querySelector(renders[i]);
  }
  Runtime.load(notebook, (variable) => {
    if (renders[variable.name]) {
      return new Inspector(renders[variable.name]);
    } else {
      // return true; // uncomment to run hidden cells
    }
  });
</script>

<style>
/* https://css-tricks.com/full-width-containers-limited-width-parents/ */
.fullwidth {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
#visual { min-height: 40vw }
</style>

End.

