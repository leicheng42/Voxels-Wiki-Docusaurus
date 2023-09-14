# Particles

![particles-example.png](/particles-example.png)

## Editor

![particles-editor.png](/particles-editor.png)

### Emit rate

How often new particles will be spawned. 0 - 100

### Minimum size

The minimum size of new particles.

### Maximum size

The maximum size of new particles.

### URL

The URL of a custom particle image; if none is provided then the default particle image (a grey square) will be used.

### Color 1 and Color 2

The initial color of new particles depends on the value of these parameters - the color will be somewhere in the range between the two given colors.

# Scripting Properties
# Scripting Properties {.tabset}
## url
`String`; Links must be `https://` and must finish with an extension such as `.jpg/.gif/.png`.
> If you set an URL, the custom colors color1 and color2 will be ignored.
{.is-info}

### get()

```js
feature.get('url')
// returns: "https://..."
```

### set()

```js
feature.set({'url':"https://www.myurl.com/file.png"})
```

### default

`""`

## emitRate
`Double`; Must be a number between 0 and 100.

### get()

```js
feature.get('emitRate')
// returns: 50.0
```

### set()

```js
feature.set({'emitRate':52})
```

### default

`50`


## minSize
`Double`; Must be a number between 0 and 1.

### get()

```js
feature.get('minSize')
// returns: 0.5
```

### set()

```js
feature.set({'minSize':0.5})
```

### default

`0.5`


## maxSize
`Double`; Must be a number between 0 and 1.

### get()

```js
feature.get('maxSize')
// returns: 0.5
```

### set()

```js
feature.set({'maxSize':0.5})
```

### default

`0.5`

## color1
`String`- hexadecimal; 

### get()

```js
feature.get('color1')
// returns: "#4cb844"
```

### set()

```js
feature.set({'color1':"#4cb844"})
```

### default

`#000000`

## color2
`String`- hexadecimal; 

### get()

```js
feature.get('color2')
// returns: "#4cb888"
```

### set()

```js
feature.set({'color2':"#4cb844"})
```

### default

`"#000000"`


## type
`String`;

### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'particles'
```

# Deprecations
for information on versioning [click here](/en/versioning-and-deprecations)

## 5.7.0

The particle feature can now be rotated in the X-axis instead of being hard-coded to 90 deegres. This means that the next time a particle system is edited, it will use the X-axis rotation set by the owner which most likey look weird, but can be easily corrected at that time.
