---
layout: post
title: Step debugging python in vscode
date: 2023-12-14 14:31 +0100
categories: python vscode development devlife debugging
tags: python vscode development devlife debugging path pythonpath
---

I've struggled a lot in making python debugging work in vscode, so I'm writing this post to help others (and myself in the future).

While trying to step debug [Barman](https://pgbarman.org/), I've found that VSCode was not able to find the of the modules I was trying to debug,
and, no matter where i was trying to set the `PYTHONPATH` environment variable to the root of the project or in the vscode settings,
the debugger was not able to find the source code.

As stupid as I may sound for not having thought about it before, the solution was to add the `PYTHONPATH` variable
in the `env` section of the `launch.json` file, with value `"${workspaceRoot}"`.
This will point VSCode to the project root, allowing the correct loading of your modules.

```json
        {
            "name": "<name>",
            "type": "python",
            "request": "launch",
            "program": "<path to the python file you want to run>",
            "console": "integratedTerminal",
            "env": {
                "PYTHONPATH": "${workspaceRoot}"
            },
            "args": [
                "<args to pass to the python file>"
            ]
        }
```
