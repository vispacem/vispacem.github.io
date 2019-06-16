---
title: How I installed JupyterLab on repl.it
date: 2019-06-16 23:25:09 +0000
key: 20190616
tags: jupyter
---

## How I installed JupyterLab on repl.it

[JupyterLab](http://jupyterlab.readthedocs.io/en/stable/) is the next-generation user interface for [Project Jupyter](https://jupyter.org) offering
all the familiar building blocks of the classic Jupyter Notebook (notebook,
terminal, text editor, file browser, rich outputs, etc.) in a flexible and
powerful user interface.
JupyterLab will eventually replace the classic Jupyter Notebook.

[repl.it](https://repl.it/) is an online compiler used for compiling and running codes of various languages like Python , javascript etc.

I only used the next file:

*main.py*

```python
import jupyterlab
import request
import os 
os.system('/home/runner/.local/bin/jupyter lab --port=3000 --ip=0.0.0.0 --no-browser')
```

Remember add the token part to the url page

For example:

```
https://jupyter--vispacem.repl.co/?token=febef11baf5e99973a875f550d6c8208e7f0b26347199d69
```
