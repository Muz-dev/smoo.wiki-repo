---
title: "Play"
description: "Outlines the methods available to play the mod. This is separate from setting up the server."
---

::alert{type="info"}
You only need to select *one* of the following mods.
::

::row
:::card{title="Download SMOO - the official mod" to="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/tag/v1.4.0"}

::::row
:::::card{title="Switch" to="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/download/v1.4.0/SMO_Online_v1.4.0_for_Switch.zip" icon="i-lucide-computer"}
Nintendo Switch
:::::
:::::card{title="Emulator" to="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/download/v1.4.0/SMO_Online_v1.4.0_for_Emulators.zip" icon="i-lucide-gpu"}
Ryujinx, Yuzu, others
:::::
::::
This mod created by Crafty, Sanae, and RCL (among others):

- Default SMOO experience
- Hide and Seek
- Co-op gameplay
  - (Most) moon syncing

<br/>

::::alert{type="warning"}
This is *less stable* than Sardines. We highly recommend Sardines if you experience crashes.
::::

:::



:::card{title="Download Sardines" to="https://github.com/Amethyst-szs/SuperMarioOdysseyOnline"}

::::row
:::::card{title="Switch" to="https://github.com/DaDev123/Super-Mario-Odyssey-Online-EXTENSIONS/releases/download/Sardines/Nintendo.Switch.zip" icon="i-lucide-computer"}
Nintendo Switch
:::::
:::::card{title="Emulator" to="https://github.com/DaDev123/Super-Mario-Odyssey-Online-EXTENSIONS/releases/download/Sardines/Emulators.zip" icon="i-lucide-gpu"}
Ryujinx, Yuzu, others
:::::
::::

Additional features compared to the official SMOO mod:
- Sardines game mode
- Much more stable

These features are in **addition** to the official mod's features.

*Note: the download links provided have been compiled by [Secret Dev](https://github.com/DaDev123) but the code was written by [Amethyst-szs](https://github.com/Amethyst-szs)*

<br/>

::::alert{type="info"}
The most stable version of SMOO.
::::
:::



:::card{title="Download SMOO+" to="https://github.com/DaDev123/SMOO-Plus"}

::::row
:::::card{title="Switch" to="https://github.com/DaDev123/SMOO-Plus/releases/download/0.6.0-pre/SMOO-Plus-Switch.zip" icon="i-lucide-computer"}
Nintendo Switch
:::::
:::::card{title="Emulator" to="https://github.com/DaDev123/SMOO-Plus/releases/download/0.6.0-pre/SMOO-Plus-Emulator.zip" icon="i-lucide-gpu"}
Ryujinx, Yuzu, others
:::::
::::

A rewriting of SMOO. It offers several extra features:

- Game mode support:
  - Sardines
  - Freeze Tag

These features are in **addition** to the official mod's features.

<br/>

::::alert{type="warning"}
This is *less* stable than Sardines *and* base SMOO. If you experience crashes, please try Sardines.
::::

:::
::


::dropdown{title="Setting up the mod"}

:::alert{type="info"}
You only need to select *one* of these options.
:::

:::dropdown{title="Playing on a modded Nintendo Switch"}

## Prerequisites

### [**Mod your switch**](https://switch.hacks.guide/)

### Check SMO Version

Before doing anything, check what version of *Super Mario Odyssey* you have installed.
To do this, press :s-icon{name="plus"} on the game on the home screen and pull up its properties.
If you're already on version `1.0.0`, you can skip the downgrading process and move to Installing SMOO.
If you're on ***any other version***, you'll need to use the **Odyssey Downgrader**.

::::row
:::::c-card{description="Ready"}
![Good version](/img/SMO/smo_v1.png)
> You're on `1.0.0`
:::::
:::::c-card{description="Not Ready"}
![Bad version](/img/SMO/smo_vX.png)
> You're **not** on `1.0.0`
:::::
::::

### Downgrade SMO

::::alert{type="info"}
[Skip this](#installing-smoo) if you are already on version `1.0.0`
::::

If you are on a version *other* than `1.0.0`, you will need to downgrade your game.
We recommend you use the [Odyssey Downgrader](https://github.com/Istador/odyssey-downgrade/releases),
which should apply SMO version `1.0.0` to your game as a mod. This is necessary for a lot of mods to work.

::::alert{type="warning"}
*Many* issues stem from not upgrading your copy of the [*Odyssey Downgrader*](https://github.com/Istador/odyssey-downgrade/releases) or [*LockpickRCM*](https://www.google.com/search?q=lockpick_rcm+latest+version).
If you're having trouble downgrading SMO, try updating both.
::::

To get started, make sure:

- You have the cartridge or digital version inserted.
- You have dumped your Switch keys using [Lockpick RCM](https://www.google.com/search?q=lockpick_rcm+latest+version).

:separator{label="Once everything is setup..."}

- Place the [Odyssey Downgrader](https://github.com/Istador/odyssey-downgrade/releases) in the `switch` folder in the root of your sd card.
- Launch into your CFW.
- Open the **hbmenu** in screenshots :s-icon{name="screenshot"} .
- Launch `Odyssey Downgrade`:

::::row
![Odyssey Downgrade Applet](/img/Downgrade/downgrade_applet.jpg)
::::

::::row
:::::c-card{description="Patch not installed"}
![Patch not installed](/img/Downgrade/downgrade_not_ready.jpg){width="500"}
> Select 'Add downgrade'

> Select 'Add Patch'

:::::
:::::c-card{description="Patch installed"}
![Patch installed](/img/Downgrade/downgrade_ready.jpg){width="500"}
> Press :s-icon{name="b"} to exit
:::::
::::

::::alert{type="info"}
> This will take 5.2 GB of space on your sd card since it applies as a mod.
> 
> If SMO crashes on launch please remove & reinsert the cartridge & try again.
::::

### Installing SMOO
- There are 2 different ways to install SMOO please select *one* of them

::::alert{type="info"}
Make sure you have access of your Switch's SD card.
::::

::::dropdown{title="Drag & Drop"}

:::::c-card
Extract the `ZIP`
![SMOO zip](/img/atmosphere/smoo-extract.png){width="400"}
:::::

:::::c-card
Copy the `atmosphere` folder & paste it in the `ROOT:` of the SD card.
![Atmosphere SMOO](/img/atmosphere/smoo-atmosphere.png){width="600"}
:::::

- You're all set!
::::

::::dropdown{title="SimpleModManager"}

:::::c-card
First download [SimpleModManager](https://github.com/nadrino/SimpleModManager/releases) & place it in the `switch` folder.
![SMM install](/img/SimpleModManger/smm-folder.png){width="400"}
:::::

:::::c-card
- In the `ROOT:` of the SD card make a `mods` folder then make an `Super Mario Odyssey` folder.
- Copy the `atmosphere` folder & rename it to `SMOO`
![Folder](/img/SimpleModManger/smm-smoo.png){width="400"}
:::::

:::::c-card
- Turn on your console and go to the **hbmenu** in screenshots :s-icon{name="screenshot"} .
- Open SimpleModManager
- You should see the `Super Mario Odyssey` folder that you created; open it and you should see `SMOO` select it and apply it.
![SMM hbmenu](/img/SimpleModManger/smm-mods.jpg)
:::::

- You're all set!

::::
:::

:::dropdown{title="Playing on an emulator"}

::::alert{type="info"}
Make sure that your game version is on `1.0.0`
::::

::::dropdown{title="Ryujinx & forks"}

:::::c-card
Right-click Super Mario Odyssey and select `Open Mods Directory`
![Ryu Config](img/Ryujinx/ryu_config.png){width="500"}
:::::

:::::c-card
Insert the extracted `ZIP` into the directory
![Ryu Folder](img/Ryujinx/ryu_directory.png){width="500"}
:::::

:::::c-card
Enable SMOO in `Manage Mods`
![Ryu Mods](img/Ryujinx/ryu_mods.png){width="500"}
:::::

- You are all set!
::::

::::dropdown{title="Yuzu-based / Other"}

:::::c-card
Right-click Super Mario Odyssey and select `Configure Game`
![Yuzu Config](img/Yuzu/yuzu_config.png){width="500"}
:::::

:::::c-card
Select `Import Mod from ZIP` 
![Yuzu Import](img/Yuzu/yuzu_import.png){width="500"}
:::::

:::::c-card
Make sure that SMOO is enabled in `Configure Game`
![Yuzu Mods](img/Yuzu/yuzu_mods.png){width="500"}
:::::

- You are all set!
::::
::

::dropdown{title="Joining servers"}

::::alert{type="info"}
**Emulator and Switch players can connect and play with each other in the same server.**
::::

- When you launch the game for the first time with the mod, you'll be asked to enter an IP address and port using any of the public servers that are available but, if you choose to, you can also host a private server(link goes here) if needed.

::::row
:::::c-card{description="IP Address"}
![SMOO IP](/img/SMO/smoo_ip.jpg){width="600"}
:::::

:::::c-card{description="Port"}
![SMOO Port](/img/SMO/smoo_port.jpg){width="600"}
:::::
::::

:separator{label="Switching Servers"}


- To switch servers go to `Online Server Settings`

::::row
![SMOO Options](/img/SMO/smoo_options.jpg)
::::

- Then select these options

::::row
:::::c-card{description="Change IP Address"}
![SMOO IP Alt](/img/SMO/smoo_ip2.jpg){width="600"}
:::::

:::::c-card{description="Change Server Port"}
![SMOO Port Alt](/img/SMO/smoo_port2.jpg){width="600"}
:::::
::::

:::alert{type="critical" align="center"}
[Never use the **RECONNECT TO SERVER** tab as it may result the game crashing or not working at all.]{style="color: orange;"}
:::

- Once you're finished please close your game and relaunch it to connect to the server.

::

::dropdown{title="Compiling the mod from source (advanced)"}
:::alert{type="warning"}
You do *not* need to do this in order to use the mod. This is for experts and is optional.
:::
:::alert{type="critical" align="center"}
[TODO]{style="color: orange;"}
:::
::
