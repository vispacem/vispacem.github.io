---
title: How I installed a Gitea service on WeDeploy for free
date: 2019-03-03 13:15:09 +0000
key: 20190303
tags: gitea
---

## How I installed a Gitea service on Wedeploy for free

[Gitea](https://gitea.io/) is a painless self-hosted Git service. It is similar to GitHub, Bitbucket, and Gitlab.

[WeDeploy](https://wedeploy.com/) is a development platform that helps you deploy your simple to complex apps quickly.

I made a Github repository with only three files:

*db/Dockerfile*

```
FROM mysql:5.5

COPY --from=healthcheck/mysql:latest /usr/local/bin/docker-healthcheck /usr/local/bin/

HEALTHCHECK CMD ["docker-healthcheck"]
```

*db/wedeploy.json*

```
{
  "id": "db",
  "port": 22,
  "env": {
    "MYSQL_ROOT_PASSWORD": "changeme",
    "MYSQL_DATABASE": "gitea",
    "MYSQL_USER": "gitea",
    "MYSQL_PASSWORD": "changeme"    
  },
  "volumes": {
    "data": "/var/lib/mysql"
  },
  "zeroDowntime": false
}
```

*gitea/wedeploy.json*

```
{
  "id": "gt",
  "image": "gitea/gitea:1.7.1",
  "port": 3000,
  "dependencies": ["db"],
  "volumes": {
    "data": "/data/gitea"
  },
  "zeroDowntime": true
}
```

Then I logged in [WeDeploy](https://console.wedeploy.com/login) with my github account.

And typed the next url:

[https://console.wedeploy.com/projects/new-deployment](https://console.wedeploy.com/projects/new-deployment)

Next I filled the *Git repository URL* and the *Project ID* fields.

And after a few minutes all worked.

The trick was the line:  "port": 22, *db/wedeploy.json*. This port is used for SSL porposes.

