---
title: How I installed node-red on repl.it
date: 2019-06-15 23:15:09 +0000
key: 20190615
tags: node-red
---

## How I installed node-red on repl.it

[Node-RED](https://nodered.org/) Node-RED is a flow-based development tool developed originally by IBM for wiring together hardware devices.

[repl.it](https://repl.it/) is an online compiler used for compiling and running codes of various languages like Python , javascript etc.

I only used the next two files:

*index.js*

```
var RED = require("node-red");
var shell = require('shelljs');
shell.exec('/home/runner/node_modules/node-red/red.js --userDir /home/runner')
```

*package.json*

```
{
  "main": "index.js",
  "dependencies": {
    "node-red": "0.20.5",
    "shelljs": "0.8.3"
  }
}
```
