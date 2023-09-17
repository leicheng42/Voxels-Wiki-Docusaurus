# The Grid

> One day, I got in. - Kevin Flynn

The grid is the multiplayer server that runs your parcel scripts on the Cryptovoxels infrastructure. It runs the exact same API as the normal scripting engine, but it keeps track of the state on the server and sends changes to everyone connected. This means if you click a door and it opens, it will open for everyone else who is standing near you. It also means you can play multiplayer games with other players, and the server will maintain the state of the game.

The multiplayer server is free to use, and is hosted by the Cryptovoxels Corporation. Your scripts are spun up on demand, have a strict memory limit of 8MB of heap, are CPU time limited, and are killed when your parcel is idle.

The advantages of using The Grid:

* Your scripts are multiplayer
* Your scripts run in a trusted environment
* Your scripts are always available
* You don't have to pay for hosting, or wait for your hosting provider to spin up your scripts

Disadvantages:

* It can be tricky to debug
* You have to fit your experience into 8MB of rams

## How to Activate
1. Go to your parcel in the [Parcels tab](https://www.cryptovoxels.com/account/parcels). Be sure to be logged in!

2. If you own the parcel, and if you're logged in, you should see an admin panel like the one below:

![admin_panel_parcel_v4.55.png](/tutorials/admin_panel_parcel_v4.55.png){.align-center}

1. Check the `on Grid` checkbox.

Done! Your scripts are now multiplayers.

## What happens

(Example for [parcel #78](https://www.cryptovoxels.com/parcels/78) - put in your own parcel ID to follow along)

1. You enter a parcel
2. The parcel is set to `grid: true` (set this in parcel settings)

![[how_to_grid]adming_panel_grid_activated_v4.55.png](/tutorials/[how_to_grid]adming_panel_grid_activated_v4.55.png){.align-center}

1. The web client connects to `wss://grid.cryptovoxels.com/grid/78`
2. The grid server spins up a v8 [isolated-vm](https://www.npmjs.com/package/isolated-vm?activeTab=readme)
3. The isolate loads up the [scripting host](http://github.com/cryptovoxels/scripting)
4. The isolate fetches your javascripts from `https://untrusted.cryptovoxels.com/grid/parcels/78/scripts.js` and evaluates it
5. The websocket connection is accepted and your client starts communicating with your grid server
6. All clients disconnect and the isolate is destroyed

The grid server currently dispatches messages instantly from your script back to the client, but this will be throttled to 5 or 10 hz in a future version, because sending realtime 60hz updates over a websocket over the public internet causes lots of lag and bunching up of packets.

## Viewing logs

Your logs are written to redis and persisted. They are publicly viewable (don't put any secrets in your logs ok) at:

`https://grid.cryptovoxels.com/grid/78/logs`

## Available APIs

:::caution
APIs are very basic as of version 1.1.2, more will become available over time 
:::

The grid server has it's own versioning  info. See the currently released version at https://grid.cryptovoxels.com/

* [Scripting API](/docs/Scripting/)
* [Built ins](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
* `setTimeout`
* `setInterval`
* `console.log`

Roadmap:

* `clearTimeout`
* `clearInterval`
* [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [`AsyncStorage`](https://reactnative.dev/docs/asyncstorage.html)
* [`importScripts`](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts)
* [Physics](https://schteppe.github.io/cannon.js/)
