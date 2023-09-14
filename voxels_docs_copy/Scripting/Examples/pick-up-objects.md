# Let player pick up a vox model
The following script will let a feature be "grabbable". Double quotes because we're technically employing the art of **deception** to make it look like we grabbed it.  For example:

![pick-up-bottle.gif](/pick-up-bottle.gif)

## 1. Place a vox model.
And give it the URL you want.

## 2. Copy and paste this script
```js
//Makes an object grabbable v1.1 - Fayelure

let Distance_to_player=0.5 // How far the object is relative to the player (negative will be behind)
let up_down_constant= -0.65  // Positive object will go higher, negative will go lower. eg: -0.65 places the object where your hands are, approximately. 0 will place the object right above your eyes.
let refresh_rate = 50 			// Number of milliseconds. Please avoid a refresh rate < 30 as it could crash the grid.

let clone = true; // change this to false if you want to not clone the object.

//-------------- Do not touch ---------------------------

function moveObject(object,player){ // calculates new position of object

  let spherePos = object.position;
  let playerRotation = player.rotation;

  let xDelta = Distance_to_player*Math.cos(-playerRotation.y+Math.PI/2 + Math.PI);
  let yDelta = Distance_to_player*Math.tan(playerRotation.x);
  let zDelta = Distance_to_player*Math.sin(-playerRotation.y+Math.PI/2 + Math.PI);

      var positionRell = [
    player.position.x - xDelta,
    player.position.y - yDelta +(up_down_constant),
    player.position.z - zDelta
  ];

return positionRell
}

function setPosition(newobject,e){ // refreshes the positions
	newobject.set({position:moveObject(newobject,e.player)})
  if(!newobject.position || !newobject.rotation){
  	parcel.removeFeature(newobject)
  }else{
  setTimeout(()=>{
  	setPosition(newobject,e)
  },refresh_rate)
  }
}

feature.on('click',e=>{ // On click, create new object and start refreshing the position
let newobject = feature
if(clone){
newobject = parcel.createFeature('vox-model')
newobject.set({scale:[feature.scale.x,feature.scale.y,feature.scale.z]})

newobject.set({url:feature._content.url})
newobject.position=feature.position
newobject.rotation=feature.rotation
}

setPosition(newobject,e)

})

```

To make this script easy to implement you only have to edit the first four lines:
```js

let Distance_to_player=0.5 // How far the object is relative to the player (negative will be behind)
let up_down_constant= -0.65  // Positive object will go higher, negative will go lower. eg: -0.65 places the object where your hands are, approximately
let refresh_rate = 50 			// Number of milliseconds. Please avoid a refresh rate < 30 as it could crash the grid.
let clone = true; // change this to false if you want to not clone the object.

```
## 3. Refresh
And the script should work once the parcel is fully loaded.

## 4. (Optional) Activate the grid
[Activating the grid](/Scripting/TheGrid) will let you see when others pick up objects and will let others see you interact with Features too.

Cause what's the point if others can't see your drinking addiction?


# What does it do?
On click, the script creates a new Feature and assigns it the same URL,position and rotation and the original.
It then calculates and repositions the copy given the player's position every x milliseconds.


> Enjoy!
Note that this script isn't perfect as it is not properly handling players leaving the parcel. Thus, too many players picking up objects might lead to a saturation of Intervals on the grid. Who knows?

I will be updating this script over time.
{.is-info}
