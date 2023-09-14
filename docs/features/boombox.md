# Boombox
A boombox allows you to stream audio from your computer into the world. To use a boombox, simply click on it and then select `Start Broadcasting` from the pop-up.

![boombox-feature-double.png](/boombox-feature-double.png)
## Editor
![boombox_editor_v4.25.png](/boombox_editor_v4.25.png)

### Spatial roll off

How quickly the sound fades away as the player moves away from the audio player.
Value between 0 and 5.

# Scripting Properties
# Scripting Properties {.tabset}
## rollOffFactor
`Double`; Value ranging from 0 to 5

### get()

```js
feature.get('rolloffFactor')
// returns: 1.6
```

### set()

```js
feature.set({'rolloffFactor':1.6})
```

### default

`1`

# How to use?
Click on the Boombox and hit start Broadcasting
![boombox-broadcast.png](/boombox-broadcast.png)

