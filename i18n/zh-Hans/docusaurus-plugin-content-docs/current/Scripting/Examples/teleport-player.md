# Teleport player on click

## Teleport player on click.
Welcome your visitors as they enter/leave your parcel!

#### Process

1. Place a vox model for the sake of this example
2. place the following script on the feature:

```js
feature.on('click',e=>{
	e.player.teleportTo('N@43W,250N,1U')
})
```

3. if you want this to happen on a trigger instead of click, replace 'click' with 'trigger'

#### What happens
The scripts obtains the player from the click and teleports it to the coordinates.

