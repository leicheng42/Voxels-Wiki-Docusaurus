# Self hosting scripts

Since June 2022 we introduced the ability for users to host their own scripting server.

## What is a scripting server?

It is a process that runs a websocket and uses event-based triggers to interact with the Cryptovoxels client.

**NOTE**: Creating a VSS is OPTIONAL for scripting; by default parcel will have `wss://grid.cryptovoxels.com/grid/{Your parcel id}` as host, which is the official hosted service by Cryptovoxels.

## How to make a Voxels Scripting Server (VSS)?
The following steps are an example to make a VSS using replit.com;

1. **Go to `replit.com` and create app**
Make an account if needed, and create a new NodeJS app (or a new NodeJS "Repl").
You'll then be welcomed by this screen:
![[vss]tutorial_1.png](/tutorials/[vss]tutorial_1.png)

2. **Install the Voxels-Scripting-Server package**
Go to the packages tab, and search for the "voxels-scripting-server" package.
Once you've found it, click the `+` to install the package.
![[vss]tutorial_2.png](/tutorials/[vss]tutorial_2.png)

3. **Run script**
Head back to your `index.js` file, and copy this code:
```js
const vss =require("voxels-scripting-server");

vss.default.makeVSS(670).then((wss) => {
  if (wss) {
    console.log("Websocket started");
  } else {
    console.error("Websocket did not start");
  }
});
```
and replace `670` with your parcel id number.

4. **Run the server!**
Now that you copied the code,hit the **RUN** button!
Replit.com will then attempt to start your server, and you'll know your server is running when the webpage loads saying `Server v 0... running!`

![[vss]tutorial_3.png](/tutorials/[vss]tutorial_3.png)

5. **Copy paste the address into your parcel settings**

Copy the address given by Replit (for example for me, the address is `https://testCryptovoxelsserver.benjythebee.repl.co`) and paste it into your Voxels parcel settings:
![[vss]voxels_settings.png](/tutorials/[vss]voxels_settings.png)

Hit save, and tadaa, your parcel now runs scripts on a hosted server.

#### Things to know
Replit does not keep your server alive by default. To keep your replit server alive, you have to upgrade your account and select the "Always on" feature in your settings.
![[vss]replit_tutorial.png](/tutorials/[vss]replit_tutorial.png)