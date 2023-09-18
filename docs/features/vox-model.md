# Vox model
A small vox model

## Vox

Voxes are small (32x32x32) .vox models, currently limited to 200 per parcel. These are usually made using [Magicavoxel](https://ephtracy.github.io/).

![vox-example.png](/vox-example.png)

### Editor

![vox-model-editor_v4.13.png](/vox-model-editor_v4.13.png)

#### URL

The URL of the .vox file.

#### Hyperlink

`(Optional)`; makes the .vox a clickable link.

#### Scale to fit

`(Optional)`; fit the size of the vox to fit the grid.

#### Collidable

`(Optional)`; Make the vox model a collidable object.

#### Colors

`(Optional)`;
Allows you to change the color of your vox model.
*This option will not appear if your vox has more than 5 colors.*


## Scripting Properties
## Scripting Properties {.tabset}
### url
`String`; Links must be `https://` and must finish with a vox extension `.vox`
Has to link to a 32x32x32 vox model or smaller.

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

// returns: 'vox-model'
```