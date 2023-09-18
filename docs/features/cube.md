# Cube

## Cube

The cube feature is a simple cube mesh that you can texture or color.

![[cube-feature]example.png](/features/[cube-feature]example.png)

### Editor

![[cube-feature]editor_5.57.png](/features/[cube-feature]editor_5.57.png){.align-center}

#### URL

The URL of the image that will be used as texture.

#### Collidable

`(Optional)`; Make the cube a collidable object.

#### Colors

`(Optional)`;
Allows you to change the color of your cube.


## Scripting Properties
## Scripting Properties {.tabset}
### url
`String`; Links must be `https://` and must finish with an image extension.

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

### Color
`String`; An Hex color string such as `#000`.

#### get()

```js
feature.get('color')
// returns: "#ffffff"...
```

#### set()

```js
feature.set({'color':"#4287f5"})
```

#### default

`"#000000"`

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

// returns: 'cube'
```