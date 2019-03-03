---
title: How I installed nod-red on WeDeploy for free.
date: 2019-03-03 15:15:09 +0000
key: 20190303b
tags: node-red
---

[Node-RED](https://nodered.org/) Node-RED is a flow-based development tool developed originally by IBM for wiring together hardware devices.

[WeDeploy](https://wedeploy.com/) is a development platform that helps you deploy your simple to complex apps quickly.

I made a Github repository with these files:

*mysettingsfile.js* ( not all lines are listed here )

```
. . .
. . .
adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: process.env.MYNODEREDPASSWORD,
            permissions: "*"
        }]
    },
. . .
. . .
```

*package.json*

```
{
    "name"         : "nr",
    "dependencies": {
        "node-red": "*",
        "node-red-dashboard": "*",
        "node-red-contrib-web-worldmap": "*",
        "node-red-contrib-mqtt-broker": "*"
    },
    "scripts": {
        "start": "node-red -s mysettingsfile.js"
    }
}
```

*wedeploy.json*

```
{
  "id": "nr",
  "port": 1880,
  "env": {
    "HOST": "0.0.0.0",
    "PORT": "1880"
  }
}
```

Then I logged in [WeDeploy](https://console.wedeploy.com/login) with my github account.

And typed the next url:

[https://console.wedeploy.com/projects/new-deployment](https://console.wedeploy.com/projects/new-deployment)

Next I filled the *Git repository URL* and the *Project ID* fields.

And after a few seconds the program worked.

[Here](https://nodered.org/docs/security) are the instructions for use a password in node-red.

```
node -e "console.log(require('bcryptjs').hashSync(process.argv[1], 8));" your-password-here
```
The result is used to set the value of MYNODEREDPASSWORD variable in wedeploy _Environment Variables_ form.

Use *admin* to access your node-red user with the previous password.

See at [https://github.com/vispacem/node-red-wedeploy](https://github.com/vispacem/node-red-wedeploy) all the files.
