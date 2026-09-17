---
title: "Host"
description: "Outlines the methods available to host the SMOO server. This is separate from setting up the mod on the client."
---

# Setting up the server

::alert{type="info"}
You only need to select *one* of these setup options.
::

::dropdown{title="Downloading the server"}
:::row
::::card{title="Download official server" to="https://github.com/Sanae6/SmoOnlineServer/releases"}
*Additional versions for ARM and others are available.*
:::::row
::::::card{title="Windows" to="https://github.com/Sanae6/SmoOnlineServer/releases/latest/download/Server.exe" icon="i-lucide-computer"}
x86_64
::::::
::::::card{title="Linux" to="https://github.com/Sanae6/SmoOnlineServer/releases/latest/download/Server" icon="i-lucide-gpu"}
x86_64
::::::
:::::
This server was created by Crafty, Sanae, speyejack, and RCL (among others). It offers:

- Discord bot support (some assembly required)
- Ban support

::::



::::card{title="Download RCL's server version" to="https://github.com/Istador/SmoOnlineServer/releases"}
*Additional versions for ARM and others are available.*
:::::row
::::::card{title="Windows" to="https://github.com/Istador/SmoOnlineServer/releases/latest/download/Server.exe" icon="i-lucide-computer"}
x86_64
::::::
::::::card{title="Linux" to="https://github.com/Istador/SmoOnlineServer/releases/latest/download/Server" icon="i-lucide-gpu"}
x86_64
::::::
:::::

Additional features compared to the official SMOO server:
- JSON API
- Ability to exclude moons (`ExcludeShines`)

These features are in **addition** to the official server features.
::::



::::card{title="Download GrafDimenzio's server version" to="https://github.com/GrafDimenzio/DSMOO/releases"}
*Additional versions for ARM and others are available.*

:::::row
::::::card{title="Windows" to="https://github.com/GrafDimenzio/DSMOO/releases/latest/download/DSMOOConsole.exe" icon="i-lucide-computer"}
x86_64
::::::
::::::card{title="Linux" to="https://github.com/GrafDimenzio/DSMOO/releases/latest/download/DSMOOConsole" icon="i-lucide-gpu"}
x86_64
::::::
:::::

A ground-up rework of the official server. It offers several unique features:

- Plugin support
    - Supports extra features offered by [SMOO+](https://github.com/DaDev123/SMOO-Plus), a fork of SMOO.
    - Experimental replay support
- Option to prevent hiders from seeing each other

:::::alert{type="warning"}
**May be less stable.**
:::::

::::
:::

::

::dropdown{title="Installing the server with Docker (advanced)"}
:::alert{type="warning"}
You do *not* need to do this in order to host a server. This is for experts and is an optional way to install it. To use Docker on Windows, you will have to setup WSL (Windows Subsystem for Linux).
:::
::

# Running the server

::dropdown{title="Running the server"}
:::alert{type="critical" align="center"}
[TODO]{style="color: orange;"}
:::
