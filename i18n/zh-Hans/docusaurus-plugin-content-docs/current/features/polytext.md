## Polytext

![polytext-example.png](/polytext-example.png)

### Editor

![polytext-editor.png](/polytext-editor.png)

#### Text

The text of the polytext. Simple.

#### Color

The color of the polytext. Straightforward.

#### Edges

Whether or not the polytext will be outlined with black edges.

![polytext-edges.png](/polytext-edges.png)

## Scripting Properties
## Scripting Properties {.tabset}
### url
`String`; 

#### get()

```js
feature.get('text')
// returns: "My new text"
```

#### set()

```js
feature.set({'text':"My new text"})
```

#### default

`""`


### edges
`Boolean`

#### get()

```js
feature.get('edges')
// returns: false
```

#### set()

```js
feature.set({'edges': true})
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
// returns: "polytext"
```

