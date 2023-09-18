# Welcome/goodbye sign

## Welcome Goodbye sign.
Welcome your visitors as they enter/leave your parcel!

![welcome-goodbye_example.png](/welcome-goodbye_example.png)

#### Process

1. Place two signs and set the first sign's ID to `welcometxt`
2. place the following script on the second sign:

```js
let msg = parcel.getFeatureById('welcometxt')

parcel.on('playerenter', event => { 
  msg.set({text:"Welcome"})
  feature.set({text:event.player.name})

  console.log(event.player.name)
})

parcel.on('playerleave', event => { 
  msg.set({text:"Goodbye"})
  feature.set({text:event.player.name})

  console.log(event.player.name)
})
```

#### What happens
The scripts detects when a user gets in/out of the parcel and retrieve the player's name.
It will display "Welcome Playername" or "Goodbye Playername"

