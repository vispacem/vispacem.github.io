---
title: How I installed fastpages on Github
date: 2020-02-16 13:15:09 +0000
key: 20200216
tags: fastpages
---

## How I installed fastpages on Github

[Fastpages](https://github.com/fastai/fastpages) is an easy to use blogging platform, with support for Jupyter notebooks, Word docs, and Markdown.

It's very easy to install following the Setup Instructions of the site:

- Click on the badge "Use this template".

- Make the _config.yaml file mods.

Next I used a console of Git bash ( one MSys2 or linux console would be also valid ) and typed:

```
ssh-keygen -t rsa -b 4096 -C "user@myemail.com" -f gh-pages -N ""
```

This created two files: *gh-pages.pub* and *gh-pages*.

In **Settings-->Deploy keys-->Add new**  make a new one whith the content of the file *gh-pages.pub* named with something like *Public key of SSH_DEPLOY_KEY* and check the *Allow write access* option.

In **Settings-->Secrets-->Add a new Secret** make a new one whith the content of the file *gh-pages* and named with  *SSH_DEPLOY_KEY*.

That's all. No needs to make a **gh_pages** branch because it's autogenerated.

Now every time you make a change **GitHub actions** will be activated and a new Website will be generated.

[Click here to see the page](https://vispacem.github.io/fastpages) 

