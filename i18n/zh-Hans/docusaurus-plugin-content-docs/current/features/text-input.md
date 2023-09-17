:::info
Feature has been reintroduced since v 5.0
:::
## Text Input

Let users enter a message.

![text-input-feature.png](/text-input-feature.png)

### Editor

![text-input-editor.png](/text-input-editor.png)

#### Placeholder

The text that appears as a placeholder when there is no user input.


## Scripting Properties
## Scripting Properties {.tabset}
### text
`String`; 

#### get()

```js
feature.get('text')
// returns: "my text"
```

#### set()

```js
feature.set({'text':"my text"})
```

#### default

`""`

### placeholder
`String`; 

#### get()

```js
feature.get('placeholder')
// returns: "my text"
```

#### set()

```js
feature.set({'placeholder':"my text"})
```

#### default

`"placeholder"`

### type
`String`;

#### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'text-input'
```
