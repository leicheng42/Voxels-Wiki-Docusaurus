## Sign

The Sign feature allows you to display one line of text. Unlike [Richtext](/docs/features/richtext), though, they can be used as a hyperlink.

![sign-example.png](/sign-example.png)

### Editor

![sign-editor.png](/sign-editor.png)

#### Text

The text you want to display.

#### Font Size

The size of the font.

#### Blend mode

This is used to determine how the text is blended with whatever is behind it. The available options are `Combine`, `Multiply`, and `Screen`.

#### Inverted

When ticked, the text will be white on a black background, rather than the other way around.

#### Hyperlink

A link that, when clicked on, will popup a warning message before letting the player go to the desired link.

#### Font Size

Self-explanatory

#### Color

Color of the font

#### Font Size

Color of the background

## Scripting Properties
## Scripting Properties {.tabset}
### text
`String`; 

#### get()

```js
feature.get('text')
// returns: "my line of text"
```

#### set()

```js
feature.set({'text':"my line of text"})
```

#### default

`""`

### link
`String`; 

#### get()

```js
feature.get('link')
// returns: "https://..."
```

#### set()

```js
feature.set({'link':"https://..."})
```

#### default

`""`

### fontSize
`Integer`; 

#### get()

```js
feature.get('fontSize')
// returns: 25
```

#### set()

```js
feature.set({'fontSize':25})
```

#### default

`25`

### color
`String`-hexadecimal; 

#### get()

```js
feature.get('color')
// returns: "#00000"
```

#### set()

```js
feature.set({'color':"#fcba03"})
```

#### default

`"#00000"`

### background
`String`-hexadecimal; 

#### get()

```js
feature.get('background')
// returns: "#00000"
```

#### set()

```js
feature.set({'background':"#fcba03"})
```

#### default

`"#fffff"`

### type
`String`;

#### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'sign'
```



