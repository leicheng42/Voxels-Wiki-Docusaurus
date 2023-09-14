# Scripting

The scripting interface lets you run javascript code on your own server and send updates into the world. Everyone that connects to the world sees the same view of your scripted parcel. You can write scripts inside any feature on a parcel, and access other features from that script.

Once you own a parcel, you can start using the feature scripting engine. Scripting in cryptovoxels is mainly client based. That is, most scripts will be run by the client and not the server.

The hierarchy is:

- The world
	- [The Parcel object](/docs/Scripting/Scripting#the-parcel)
  - [The Feature object](/docs/Scripting/Scripting#feature-object)
  - [The Player object](/docs/Scripting/Scripting#player-object)
  - [The FeatureBasicGUI object](/docs/Scripting/basic-gui-api)
  	- [The guiControl object](/docs/Scripting/Scripting#guicontrol-object)
      
For scripting examples: [click here](/docs/Scripting/Examples)

> A more up-to-date documentation exists at [blog.cryptovoxels.com](http://blog.cryptovoxels.com/scripting-bundle/)
{.is-warning}


      
# The parcel
This section includes properties, functions and events common to all plots.

## Properties

**ID** - `parcel.id = 500` - Returns an integer; the parcel's id

**Owner** - `parcel.owner = "0x..."` - Returns a string; the parcel's owner

**Contributors** - `parcel.contributors = []` - Returns an array; the parcel's contributors list

**allowLoggedInOnly** - `parcel.allowLoggedInOnly = false`- Returns a boolean; When set to true, all non-logged in users will be kicked out. 

**isPrivate** - `parcel.isPrivate = false`- Returns a boolean; Returns a boolean on whether the parcel is private or not. When set to true, all players not allowed on the parcel will be kicked out. See [allow,disallow](/docs/Scripting/Scripting#allowwallet-parcelallow0x).

**allowedWallets** - `parcel.allowedWallets = ["0x..."]`- Returns an array; The list of wallets allowed to enter the parcel if the parcel is private. Cannot be set, use [allow,disallow](/docs/Scripting/Scripting#allowwallet-parcelallow0x).

> Note: Setting a parcel private using `isPrivate` will still require the user to be in the parcel first before being kicked out. `isPrivate`, `allow`, and `disallow` are disabled in free-spaces.
{.is-info}

## Functions

### getFeatures - `parcel.getFeatures()`
- Returns: A list of Feature objects

```js
let features = parcel.getFeatures();
```

### getFeatureById - `parcel.getFeatureById(id)` 
- Arguments: **id** - the desired feature's id; a *string*
- Returns: a Feature object

```js
let door = parcel.getFeatureById('door');
console.log('door:', door);
```

### getFeatureByUuid - `parcel.getFeatureByUuid(Uuid)` 
- Arguments: **Uuid** - the desired feature's Uuid; a *string*
- Returns: a Feature object

```js
let feature = parcel.getFeatureById('3ed2bdd2-7570-485d-85b3-e5fd950bf3c6');
console.log('feature:', feature);
```

### getFeaturesByType - `parcel.getFeaturesByType(type)` 
- Arguments: **type** - the desired feature type; a *string*
- Returns: a list of Feature objects

```js
let allVoxModels = parcel.getFeaturesByType('vox-model');
```
Valid types are:

- `'vox-model'`
- `'button'`
- `'image'`
- `'sign'`
- `'polytext'`
- `'audio'`
- `'nft-image'`
- `'megavox'`
- `'text-input'`
- `'slider-input'`
- `'video'`

### createFeature - `parcel.createFeature(type)` 
- Arguments: **type** - the desired feature type; a *string*
- Returns: a Feature object

```js
let newFeature = parcel.createFeature('vox-model');
```

> When a feature is created it has a scale and position of [0,0,0]. 
Thus, remember to give it a position and a scale once created. To learn how to that, scroll down to [Feature object](/docs/Scripting/Scripting#feature-object) -> Properties.
{.is-warning}


### removeFeature - `parcel.removeFeature(f)` 
- Arguments: **f** - the feature to remove; a *Feature* object
- Returns: an event

```js
let chair = parcel.getFeatureById('chairvox')
parcel.removeFeature(chair);
```


### getPlayers - `parcel.getPlayers()` 
- Arguments: none
- Returns: a list of Player objects.

### getPlayersWithinParcel - `parcel.getPlayersWithinParcel()` 
- Arguments: none
- Returns: a list of Player objects. Only those inside the parcel

### fetchSnapshots(callback?) - `parcel.fetchSnapshots(callback?)`
- Arguments: (optional) a callback function called when the snapshots have been fetched. The callback function must have one argument, which will be an array of snapshots.
- Returns: void
- **Note** This does not work in spaces.

### setSnapshot(snapshot_id) - `parcel.setSnapshot(snapshot_id)`
- Arguments: an integer that represents the id of the selected snapshot.
- Returns: void
- **Note** This does not work in spaces.

Example: 
```js
function myCallback(snapshots){
  parcel.setSnapshot(snapshots[0].id)
}

feature.on('click',e=>{
  parcel.fetchSnapshots(myCallback)
})
```
> **Two things to remember:**
**One**, when reverting your parcel to a snapshot via scripting, it will not save on the server. (only the client can see). Note also that your script will be gone because it will be overwritten.
**Two**, if you edit the parcel AFTER calling `setSnapshot` it will save the snapshot on the server.
{.is-warning}


### allow(wallet) - `parcel.allow("0x..")`
Add `wallet` to the list of allowed wallets when the parcel is Private.
- Arguments: A wallet address;
- Returns: void;

### disallow(wallet) - `parcel.disallow("0x..")`
Remove `wallet` from the list of allowed wallets when the parcel is Private.
- Arguments: A wallet address;
- Returns: void;

### isWalletAllowedIfPrivate(wallet) - `parcel.isWalletAllowedIfPrivate("0x..")`
Checks if `wallet` is allowed inside when the parcel is Private.
- Arguments: A wallet address;
- Returns: void;

# Parcel Events

**Player enter** - `parcel.on('playerenter', (e)=> {})` 
- Returns: an event `e` containing a player object with the player's information.
- eg: `e.player.name -> returns "Fayelure"`
- Fired when the player enters inside the parcel

**Player leave** - `parcel.on('playerleave', (e)=> {})` 
- Returns: an event `e` containing a player object with the player's information.
- eg: `e.player.wallet -> returns "0xdbw2fr8..."`
- Fired when the player leave the parcel

**Player nearby** - `parcel.on('playernearby', (e)=> {})` 
- Returns: an event `e` containing a player object with the player's information.
- eg: `e.player.name -> returns "Fayelure"`
- Fired when the player enters the streets surrounding the parcel

**Player nearby** - `parcel.on('playeraway', (e)=> {})` 
- Returns: an event `e` containing a player object with the player's information.
- eg: `e.player.name -> returns "Fayelure"`
- Fired when the player leaves the area/street near the parcel

# Player object

Available from `parcel.getPlayers()` or `feature.on('click', e => console.log(e.player))`. Currently is just an object, but will become a class in the future.

## Attributes:

* `player.name` => 'captainbenis.eth'
* `player.wallet` => '0x2D891ED45C4C3EAB978513DF4B92a35Cf131d2e2'
* `player.uuid` => avatar uuid for this instance of the player (player may have multiple tabs open with seperate avatars)

> There are multiple ways to spoof `player.wallet` and `player.name`, do not trust or send funds to this address. We will tighten up the security in the future for the hosted scripting server and update these docs when we do. {.is-warning}

## Functions:

### teleportTo(coordinates) - `player.teleportTo(coordinates)`
- Arguments: A string of coordinates such as `'N@43W,250N,1U'`
- Returns: void
- Disabled on players outside the parcel
[See Example](/docs/Scripting/Examples/teleport-player)

### hasWearable(tokenId,collectionId?) - `player.hasWearable(tokenId,collectionId)`
- Arguments: An integer `tokenId` which is the token id of that wearable, and `collectionId` which is the id of the collection that wearable belongs to.
- Returns: true of false.

### emote(emoji) - `player.emote('😋')`
- Arguments: A string; An emoji that is supported by cryptovoxels. 
For a list of supported emojis see [Emojis](/docs/Social#emojis)
You can also find the list within scripting `console.log(emojis)`.
- Returns: void
- Disabled on players outside the parcel
**Note: This function is throttled to 500ms**

### animate(animation) - `player.animate('Dance')`
**This function has been deprecated as it was too invasive. It will no longer work (March 2022)**
- Arguments: A string; The name of an animation.
The list of supported animations is:
```
Idle , Dance, Wave, Sitting, Spin, Savage, kick, Uprock, Floss, backflip
```
You can also find the list within scripting `console.log(animations)`.
- Returns: void
- Disabled on players outside the parcel
**Note: This function is throttled to 10 seconds**

### hasEthereumNFT(contract,tokenId,successCallback?,failCallback?) - `player.hasEthereumNFT('0x...',5,(hasNFT)=>.., (reason)=>..`
- Arguments: 
**Contract:** string; The contract of the transaction.
**tokenId:** string or number; The token ID to check ownership of.
**successCallback:** Function; A function that will be called on success. The given argument is a boolean indicating whether the player has the NFT or not. For example `(hasNFT)=>{console.log('player has NFT :',hasNFT})`
**failCallback:** Function; A function that will be called on fail. The given argument is a string which is the reason the API failed.
- returns: void

### kick() - `player.kick()`
- Arguments: None
- Returns: None
- Disabled on players outside the parcel

## Events:

**move** - `player.on('move', (e)=> {...})` 
- Returns: an event e.

**click** - `player.on('click', (e)=> {...})` 
- Returns: an event e.

**chat** - `player.on('chat', (e)=> {...})` 
- Returns: an event e containing the text of the chat.

# Feature object
This section includes properties, functions and events common to all features.
> For feature-specific properties and methods, go to the features page in [features](/docs/features).
{.is-info}


## Properties

### ID - `feature.id` 
- Returns: an integer; the feature's id.
- Can be set. eg: `feature.id = 'myvoxId' ` 

### Type - `feature.type` 
- Returns: an string; the feature's type.

Types include:
- 'vox-model'
- 'button'
- 'image'
- 'sign'
- 'polytext'
- 'richtext'
- 'audio'
- 'video'
- 'youtube'
- 'nft-image'
- 'megavox'
- 'text-input'
- 'spawn-point'

### Position - `feature.position` 
- Returns: a vector of form [x (*double*),y (*double*),z (*double*)].
- Can be set. eg: `feature.position.set(1, 0.72, 2)`
	 or `feature.position.y = 0.72` 
   or `feature.set({position:[1,0.72,2]})` 
- Position is in parcel space (not world space)
- Position is in meters
> See [scripting examples](/docs/Scripting/Examples/Move-rotate-scale-Feature#h-1-positions) for Positions
{.is-info}


### Scale - `feature.scale` 
- Returns: a vector of form [x (*double*),y (*double*),z (*double*)].
- Can be set. eg: `feature.scale.set(0.75, 0.75, 0.75)`
	 or `feature.scale.y = 0.75` 
   or `feature.set({scale:[0.75,0.75,0.75]})` 
> See [scripting examples](/docs/Scripting/Examples/Move-rotate-scale-Feature#h-3-scaling) for scales.
{.is-info}


### Rotation - `feature.rotation` 
- Returns: a vector of form [x (*double*),y (*double*),z (*double*)].
- This is a proxy vector object. Calling `set` on it eg: `feature.rotation.set(0, 0, 0)`
	 or `feature.rotation.y = 3.14`. 
   or `feature.set({rotation:[0,3.14,0]})` 
   
> See [scripting examples](/docs/Scripting/Examples/Move-rotate-scale-Feature#h-2-rotations) for rotations.
{.is-info}
   
   
>   While the in-world user interface uses degrees, the scripting engine uses radians.
3.14 (*pi*) will rotate the item 180 degrees.
{.is-warning}


**nb:** Position, scale and rotation are `Vector3` object, with a ES6 proxy watching for updates to `x`, `y` and `z`.

- Calling `feature.position.x = 1` works.
- Calling `feature.position.copyFrom(new Vector3(1, 2, 3))` works
- Calling `feature.position.set(1, 2, 3)` works.
- Calling `feature.position.addInPlace(new Vector3(4, 5, 6))` works
- Etc.
- Calling `feature.position = new Vector3()` *won't work*.

### Description - `feature.description`
- Returns: a dictionary of all the attributes you can `set` on the object. 
- Notes: Don't mutate the returned object, assume it's read only. Call `set` to update attributes in the description.

## Methods


### clone() - `feature.clone()`
- Returns: a clone feature

### remove() - `feature.remove()`
Remove feature from the parcel
- Returns: void

### set(dict) - `feature.set({ url: 'http://', ... })`
Set the properties of the feature
- Argument: an object with a key and a value such as {url:'http...'}
- Returns: void

### get() - `feature.get('url')`
Set the properties of the feature
- Returns: any

### createAnimation() - `feature.createAnimation('position')`
see [Animation API](/docs/Scripting/Animation-API)
### startAnimations() - `feature.startAnimations([animation])`
see [Animation API](/docs/Scripting/Animation-API)

### createBasicGui(id?,options?) - `feature.createBasicGui('id',...)`
see [GUI API](/docs/Scripting/Scripting#Basic-GUI-Object)
- Returns a FeatureBasicGui object.

### removeGUI() - `feature.removeGUI()`
removes the GUI present on this feature

## Events
### on click
- Gets a click event. Can be obtain via click on `button` or `vox models` or via trigger on `image`,`vox-model`,`nft-model`,`particle-system`,`megavox`.

```js

feature.on('click', (e)=> {
	console.log(e.player) // Player object
  console.log(e.point) // Vector3 of click in parcel space
  console.log(e.normal) // Vector3 of normal at face where clicked
})
``` 
### on trigger
- Gets a trigger event. Similar to the click event. However this event is fired only by features with `isTriggered` set to `true` and if the user is within the trigger's range. 

```js

feature.on('trigger', (e)=> {
	console.log(e.player) // Player object
})
``` 
# Feature specific

For feature specific properties, go to your desired [feature](/docs/features) and scroll down to Scripting Properties.


# Basic GUI Object
This section includes properties, functions and events for basic GUIs.

## Properties

### ID - `gui.id` 
- Returns: string, the GUI's unique id.
- Can be set. eg: `feature.id = 'myvoxId' ` 

### Uuid - `gui.uuid` 
- Returns: string, the GUI's unique uuid. 

### feature - `gui.feature` 
- Returns: Feature, the parent feature

### showing - `gui.showing`
- Returns whether the GUI is shoing or not

### listOfControls - `gui.listOfControls` 
- Returns: an array of guiControls.

### defaultControl - `gui.defaultControl` 
- Returns an example of default control.

## Methods

### addButton(text=null,positionInGrid=[0,0],id=null) - `gui.addButton('My button')` 
- **Arguments:**
	- text (optional): a string,
  - Id (optional): a string,
  - positionInGrid (optional): An array of 2 integers, the first integer being the row number, and the second being the column number.
- **Returns:** a guiControl of the button type.

### addText(text=null,positionInGrid=[0,0],id=null) - `gui.addtext('My text')` 
- **Arguments:**
	- text (optional): a string,
  - positionInGrid (optional): An array of 2 integers, the first integer being the row number, and the second being the column number.
- **Returns:** a guiControl of the text type.

### getControlById(id) - `gui.getControlById('buttonId')` 
- Arguments: a string
- Returns: a guiControl or Null

### getControlByUuid(id) - `gui.getControlByUuid('wdwdw-dwd-wd..')` 
- Arguments: a string
- Returns: a guiControl or Null

### getControlByPosition(array) - `gui.getControlByUuid([1,0])` 
- Arguments: an array of 2 integer.
- Returns: a guiControl or Null

### show() - `gui.show()` 
- Returns: void

### destroy() - `gui.destroy()` 
- Returns: void

# guiControl Object
This section includes properties, functions and events for basic GUIs.

## Properties

### gui - `guiControl.gui` 
- Returns: a FeatureBasicGui object, the parent GUI

### id - `guiControl.id` 
- Returns: string, the guiControl's id.
- Can be set. eg: `control.id = 'myId' ` 

### Uuid - `guiControl.uuid` 
- Returns: string, the guiControl's unique uuid. 

### type - `guiControl.type` 
- Returns: string, the type of guiControl 
At the moment this can only return `button` or `text`

### text - `guiControl.text` 
- Returns: string, the text of the Text or Button control

### positionInGrid - `guiControl.positionInGrid` 
- Returns: an Array of 2 integers, the position of the control in a grid. 
Default is [0,0]

### summary - `guiControl.summary` 
- Returns: an object with the basic information of the control.
- **Useful for console.log in the grid**

## Methods

### update() - `guiControl.update()`
Update the control.
- Returns void


> A more up-to-date documentation exists at [blog.cryptovoxels.com](http://blog.cryptovoxels.com/scripting-bundle/)
{.is-warning}
