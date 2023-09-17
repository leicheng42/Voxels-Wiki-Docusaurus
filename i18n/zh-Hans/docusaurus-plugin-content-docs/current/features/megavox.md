## Megavox

Megavoxes are large (126x126x126) .vox models, currently limited to 5 per parcel.

![megavox-example.png](/megavox-example.png)

### Editor

![megavox-editor.png](/megavox-editor.png)

#### URL

The URL of the .vox file.

#### Hyperlink

`(Optional)`; makes the megavox a clickable link.


## Scripting Properties
## Scripting Properties {.tabset}
### url
`String`; Links must be `https://` and must finish with a vox extension `.vox`
Has to link to a 126x126x126 vox model.

#### get()

```js
feature.get('url')
// returns: "https://..."
```

#### set()

```js
feature.set({'url':"https://www.myurl.com/file.vox"})
```

#### default

`""`

### link
`String`; Links must be `https://`.

#### get()

```js
feature.get('link')
// returns: "https://..."
```

#### set()

```js
feature.set({'link':"https://www.myurl.com/"})
```

#### default

`""`

### collidable
`Boolean`

#### get()

```js
feature.get('collidable')
// returns: false
```

#### set()

```js
feature.set({'collidable': true})
```

#### default

`false`

### type
`String`;

#### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'megavox'
```