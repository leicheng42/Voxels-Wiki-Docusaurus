# Emote emojis on click.
Make an avatar emote when needed!

### Process

1. Place a vox model or a button for the sake of this example
2. place the following script on the feature:

```js
feature.on('click',e=>{
	e.player.emote('💓')
})

// For a list of supported emojis
// use: console.log(emojis)
```

3. if you want this to happen on a trigger instead of click, replace 'click' with 'trigger'

### What happens
The scripts obtains the player from the click and generate emotes around the player.
