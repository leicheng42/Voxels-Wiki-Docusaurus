# Slider Input

Let users enter a numerical value within a range.

![[slider_input]example_v5.18.png](/features/[slider_input]example_v5.18.png)

## Editor
![[slider_input]editor_7.18.2.png](/features/[slider_input]editor_7.18.2.png)

### Text

A text that will appear above the slider input.

# Scripting Properties
# Scripting Properties {.tabset}
## value
`String`; 

### get()

```js
feature.get('value')
// returns: the value of the slider
```

### set()

```js
feature.set({'value':0.2})
```

### default

`0.25`

## text
`String`; 

### get()

```js
feature.get('text')
// returns the text above the slider
```

### set()

```js
feature.set({'text':"my text"})
```

### default

`""`

## minimum
`number`; 

### get()

```js
feature.get('minimum')
// returns: the minimum value of the slider
```

### set()

```js
feature.set({'minimum':0.01}) // a minimum of 0 will not work
```

### default

`0.01`

## maximum
`number`; 

### get()

```js
feature.get('maximum')
// returns: the maximum value of the slider
```

### set()

```js
feature.set({'maximum':1})
```

### default

`1`


## type
`String`;

### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'slider-input'
```
