---
title: GSM points in Spain
date: 2019-02-06 23:15:09 +0000
tags: cell-towers leafmap
---

## GSM points in Spain from ObservableHQ

Just a few of them.


 <script src="https://d3js.org/d3.v5.min.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/@observablehq/stdlib"></script>


  <svg id="packSVG" width=932 height=932 viewBox="0,0,932,932"></svg>
  <script>
    const color = d3.scaleSequential(d3.interpolateMagma).domain([8, 0]);
    const format = d3.format(",d");
    const width = 932;
    const height = width;
    const pack = data => d3.pack()
    .size([width - 2, height - 2])
    .padding(3)
    (d3.hierarchy(data)
     .sum(d => d.size)
     .sort((a, b) => b.value - a.value));
    const {DOM, require} = new observablehq.Library;

		require()('@observablehq/flare')
      .then(data => {
      const root = pack(data);

      const svg = d3.select('#packSVG')
      .style("font", "10px sans-serif")
      .style("width", "100%")
      .style("height", "auto")
      .attr("text-anchor", "middle");

      const node = svg.selectAll("g")
      .data(root.descendants())
      .enter().append("g")
      .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

      node.append("circle")
        .attr("r", d => d.r)
        .attr("fill", d => color(d.height));

      const leaf = node.filter(d => !d.children);

      leaf.select("circle")
        .attr("id", d => (d.leafUid = DOM.uid("leaf")).id)
        .attr("stroke", "#000");

      leaf.append("clipPath")
        .attr("id", d => (d.clipUid = DOM.uid("clip")).id)
        .append("use")
        .attr("xlink:href", d => d.leafUid.href);

      leaf.append("text")
        .attr("clip-path", d => d.clipUid)
        .selectAll("tspan")
        .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
        .enter().append("tspan")
        .attr("x", 0)
        .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
        .text(d => d);

      node.append("title")
        .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);
    });
  </script>


End.

