# Richtext

The Richtext feature allows you to display multiple lines of formatted text. Unlike [signs](/features/sign), though, they can't be used as a hyperlink.

![richtext-example.png](/richtext-example.png)

## Editor

![richtext-editor.png](/richtext-editor.png)

### Text

The text you want to display, in markdown format.
> It is possible to style text using css by placing something like this after your text:   `{:style="color:red;background:green;font-size:18px"}`
{.is-info}

### Blend mode

This is used to determine how the text is blended with whatever is behind it. The available options are `Combine`, `Multiply`, and `Screen`.

### Inverted

When ticked, the text will be white on a black background, rather than the other way around.


# Scripting Properties
# Scripting Properties {.tabset}
## text
`String`; 

### get()

```js
feature.get('text')
// returns: "https://..."
```

### set()

```js
feature.set({'text':"my paragraph"})
```

### default

`""`
## blendMode
`String`

### get()

```js
feature.get('blendMode')
// returns: 'Combine'
```

### set()

```js
feature.set({'blendMode': 'Combine'})
```

### default

`"Multiply"`

## inverted
`Boolean`; 

### get()

```js
feature.get('inverted')
// returns: false
```

### set()

```js
feature.set({'inverted': true})
```

### default

`false`

## type
`String`;

### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'richtext'
```


