# Snippets:

## Set sign on click
```js
/* for more info go to 
/docs/Scripting/Examples/Click-trigger
*/

let textSign = parcel.getFeatureById('triggerResult')

feature.on('click',e=>{
    textSign.set({text:'Click!'})
})
```

## is Wearing a wearable

```js
/*
This checks whether the player is wearing a wearable on player enter
using '.hasWearable(token_id,collection_id(optional))'
*/

parcel.on('playerenter',e=>{
  if(e.player.isAnonymous){
    // if player is anonymous we can't check if he's got wearables.
    return false
  }
  console.log(e.player.hasWearable(94,1)) // show true or false
})

```

## Play on player enter

```js
// Unnecessary, videos and audio have an `autoplay` function
parcel.on('playerenter', () => {
  feature.play()
})
```

## Pause on player leave

```js
parcel.on('playerleave', () => {
  feature.pause()
})
```

## Welcome/Goodbye message

```js
/* for more info go to 
/docs/Scripting/Examples/welcome_message
*/

let msg = parcel.getFeatureById('welcometxt')

parcel.on('playerenter', event => {
  msg.set({text:"Welcome"})
  feature.set({text:event.name})

  console.log(event.name)
})

parcel.on('playerleave', event => {
  msg.set({text:"Goodbye"})
  feature.set({text:event.name})

  console.log(event.name)
})
```

## Change feature url on timer
```js

/* for more info go to 
/docs/Scripting/Examples/loop-images-timer
*/

var url =["URL1",
"URL2",
"URL3",
"URL4"]

let numSecs=2 // number of seconds

//-----------Nothing to touch here-----------
i=0
setInterval(()=>{
  if(i!=url.length){
    feature.set({url:url[i]})
    i++
  }else{
    i=0
  }
},numSecs*1000)
```

## Delete on click

```js
feature.on('click', () => {
  feature.dispose()
})
```

## Youtube theater
```js
/* for more info go to 
/docs/Scripting/Examples/Youtube_theater
*/

// This code runs best on Grid!

let image = parcel.getFeatureById('video_object')

let input = parcel.getFeatureById('text_input')

function validateYouTubeUrl(url) {
    if (url != undefined || url != '') {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return true;
        } else {
            alert('not valid');
            return false;
        }
    }
}


feature.on('click',e=>{
  const newurl = input.text

if(validateYouTubeUrl(newurl)){
  image.set({url:newurl})
}
})
```

## Collidable - button toggle

```js
/* for more info go to 
/docs/Scripting/Examples/trap_door
*/


let b = parcel.getFeatureById('trapdoor')
let collide=true
b.set({collidable:true})

feature.on('click',e=>{
  if(collide){
    b.set({collidable:false})
    collide=!collide
  }else{
    b.set({collidable:true})
    collide=!collide
  }

})
```

## Collidable - button trigger and revert

```js
/* for more info go to 
/docs/Scripting/Examples/trap_door
*/

// Button click will make item non-collidable
// Item will become collidable 1 seconds later

let b = parcel.getFeatureById('trapdoor')

b.set({collidable:true})
let timeNonCollidable = 1 // time in seconds

feature.on('click',e=>{
    b.set({collidable:false})
    setTimeout(()=>{b.set({collidable:true})},timeNonCollidable*1000)

})
```

## Pressure plate

```js
/* Place a vox model and give it the following url: */
// /docs/vox_library/pressure-plate.vox

// Give it a scale of [1, 0.75 1]

// Select `set as trigger` in the editor. no need to edit other settings

feature.on('trigger',e=>{
    console.log('I have been stepped on')
})
```

## Teleport on click

```js

feature.on('click',e=>{
	e.player.teleportTo('N@43W,250N,1U')
})
```

## get collectibles

```js
/*
This returns the collectibles of a player on 'playerenter'
*/

parcel.on('playerenter',e=>{
  e.player.collectibles.forEach(c=>{
   console.log(c) 
  })
})

```
