// URL: https://observablehq.com/d/ba198ce08e01bf46
// Title: ElGrapho     test
// Author: 
// Version: 63
// Runtime version: 1

const m0 = {
  id: "ba198ce08e01bf46@63",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# ElGrapho     test`
);}),
      node_id: 0
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`[https://github.com/ericdrowell/ElGrapho](https://github.com/ericdrowell/ElGrapho)`
);}),
      node_id: 59
    },
    {
      name: "html",
      value: (function()
{
  let element = document.createElement('div')
  element.id = 'container'
  element.style.width = '500px'
  element.style.height = '500px'
  element.style.border = '1px solid black'
  return element
}
),
      node_id: 8
    },
    {
      name: "graph",
      inputs: ["ElGrapho"],
      value: (function(ElGrapho){return(
new ElGrapho({
  container: document.getElementById('container'),
  model: {
    nodes: [
      {x: 0,    y: 0.6,  group: 0, label: 0},
      {x: -0.4, y: 0,    group: 1, label: 1},
      {x: 0.4,  y: 0,    group: 1, label: 2},
      {x: -0.6, y: -0.6, group: 2, label: 3},
      {x: -0.2, y: -0.6, group: 2, label: 4},
      {x: 0.2,  y: -0.6, group: 2, label: 5},
      {x: 0.6,  y: -0.6, group: 2, label: 6}
    ],
    edges: [
      {from: 0, to: 1},
      {from: 0, to: 2},
      {from: 1, to: 3},
      {from: 1, to: 4},
      {from: 2, to: 5},
      {from: 2, to: 6}
    ],
    width: 500,
    height: 500
  }
})
);}),
      node_id: 4
    },
    {
      name: "ElGrapho",
      inputs: ["require"],
      value: (function(require){return(
require('elgrapho')
);}),
      node_id: 52
    },
  ]
};

const nodes = [{"id":0,"value":"md`# ElGrapho     test`","pinned":false},{"id":59,"value":"md`[https://github.com/ericdrowell/ElGrapho](https://github.com/ericdrowell/ElGrapho)`","pinned":false},{"id":8,"value":"html = {\n  let element = document.createElement('div')\n  element.id = 'container'\n  element.style.width = '500px'\n  element.style.height = '500px'\n  element.style.border = '1px solid black'\n  return element\n}","pinned":true},{"id":4,"value":"graph = new ElGrapho({\n  container: document.getElementById('container'),\n  model: {\n    nodes: [\n      {x: 0,    y: 0.6,  group: 0, label: 0},\n      {x: -0.4, y: 0,    group: 1, label: 1},\n      {x: 0.4,  y: 0,    group: 1, label: 2},\n      {x: -0.6, y: -0.6, group: 2, label: 3},\n      {x: -0.2, y: -0.6, group: 2, label: 4},\n      {x: 0.2,  y: -0.6, group: 2, label: 5},\n      {x: 0.6,  y: -0.6, group: 2, label: 6}\n    ],\n    edges: [\n      {from: 0, to: 1},\n      {from: 0, to: 2},\n      {from: 1, to: 3},\n      {from: 1, to: 4},\n      {from: 2, to: 5},\n      {from: 2, to: 6}\n    ],\n    width: 500,\n    height: 500\n  }\n})","pinned":true},{"id":52,"value":"ElGrapho = require('elgrapho')","pinned":true}];

const notebook = {
  id: "ba198ce08e01bf46@63",
  modules: [m0],
  nodes
};
export default notebook;
