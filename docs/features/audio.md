## Audio

An audio feature is a little player for mp3s. You can link to any mp3 and we'll try and stream it. 

![audio-feature.png](/audio-feature.png)

### Editor

![[audio]editor_v8.1.png](/features/[audio]editor_v8.1.png)

#### Sprite

Display a smaller audio element

#### Streaming

Streams the audio directly, without trying to proxy it through our servers. Should make audio play faster, but if you have weird referrer rules on hosting server this might not work.

#### Autoplay 

As soon as someone enters your parcel, start playing this audio. (With great power comes great responsibility).

#### Loop

Loop the audio forever.

#### Spatial rolloff factor

How quickly the sound fades away as the player moves away from the audio player.
Value between 0 and 5. 

#### Volume

How loud should the audio play
Value between 0 and 1. 

#### URL

Links must be `https://` since we force https:// for everything.

## Scripting Properties
## Scripting Properties {.tabset}
### url
`String.`; Links must be `https://` and must finish with an audio extension such as `.mp3`

#### get()

```js
feature.get('url')
// returns: "https://..."
```

#### set()

```js
feature.set({'url':"https://www.myurl.com/file.mp3"})
```

#### default

`""`

### sprite
`Boolean.`

#### get()

```js
feature.get('sprite')
// returns: false
```

#### set()

```js
feature.set({'sprite': true})
```

#### default

`false`

### streaming
`Boolean.`

#### get()

```js
feature.get('streaming')
// returns: false
```

#### set()

```js
feature.set({'streaming': true})
```
#### default

`false`

### autoplay
`Boolean.`

#### get()

```js
feature.get('autoplay')
// returns: false
```

#### set()

```js
feature.set({'autoplay': true})
```
#### default

`false`

### loop
`Boolean.`

#### get()

```js
feature.get('loop')
// returns: false
```

#### set()

```js
feature.set({'loop': true})
```

#### default

`false`

### rolloffFactor
`double`; Value ranging from 0 to 5

#### get()

```js
feature.get('rolloffFactor')
// returns: 1.6
```

#### set()

```js
feature.set({'rolloffFactor': 1.6})
```

#### default
`1.6`

### volume
`double`; Value ranging from 0 to 1

#### get()

```js
feature.get('volume')
// returns: 0.5
```

#### set()

```js
feature.set({'volume': 0.5})
```

#### default
`0.5`

### type
`String`;

#### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'audio'
```

## Scripting Methods
## Scripting Methods {.tabset}
### play()
```js
feature.play()
```
plays the audio

### pause()
```js
feature.pause()
```
pauses the audio

### stop()
```js
feature.stop()
```
stops the audio