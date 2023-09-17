## Image

A two dimensional image from a URL.

![image-feature.png](/image-feature.png)

### Editor

![image-editor.png](/image-editor.png)

#### URL

The URL of the image. Link has to start with `https://...`

#### Hyperlink

`(Optional)`; makes the image a clickable link.

#### Blend mode

This is used to determine how the image is blended with whatever is behind it. The available options are `Combine`, `Multiply`, and `Screen`.

#### Keep transparency

If ticked, any transparency in the image will be converted to black.

#### Stretch

If ticked, the image will be stretched to fit into the target rectangular area, rather than cropped.

#### Update daily

If ticked, the image will reload every day. This is useful, for example, if you have a rotating advertisement where the image will change.

#### uScale/vScale

Helps you tiles an image properly

#### Trigger

Set whether or not the feature is a trigger.

## Scripting Properties
## Scripting Properties {.tabset}
### url
`String`; Links must be `https://` and must finish with an extension such as `.jpg/.gif/.png`.

#### get()

```js
feature.get('url')
// returns: "https://..."
```

#### set()

```js
feature.set({'url':"https://www.myurl.com/file.png"})
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


### blendMode
`String`

#### get()

```js
feature.get('blendMode')
// returns: 'Combine'
```

#### set()

```js
feature.set({'blendMode': 'Combine'})
```

#### default

`"Multiply"`

### updateDaily
`Boolean.`

#### get()

```js
feature.get('updateDaily')
// returns: false
```

#### set()

```js
feature.set({'updateDaily': true})
```

#### default

`false`

### transparent
`Boolean.`

#### get()

```js
feature.get('transparent')
// returns: false
```

#### set()

```js
feature.set({'transparent': true})
```

#### default

`false`

### stretched
`Boolean.`

#### get()

```js
feature.get('stretched')
// returns: false
```

#### set()

```js
feature.set({'stretched': true})
```

#### default

`false`


### uScale
`Integer`

#### get()

```js
feature.get('uScale')
// returns: 1
```

#### set()

```js
feature.set({'uScale': 1})
```

#### default

`1`

### vScale
`Integer`

#### get()

```js
feature.get('vScale')
// returns: 1
```

#### set()

```js
feature.set({'vScale': 1})
```

#### default

`1`

### type
`String`;

#### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'image'
```

