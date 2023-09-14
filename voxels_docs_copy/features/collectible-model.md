# Collectible model

Lets you display the 3d representation of your cryptovoxels collectible. It has a built-in UI window that displays information about the nft.

![[collectible_model]example_v7.18.png](/features/[collectible_model]example_v7.18.png)

## Editor

![[collectible_model]editor_v7.18.png](/features/[collectible_model]editor_v7.18.png)


# Scripting Properties
# Scripting Properties {.tabset}
## collectible
`Object`; An object with multiple properties.
Properties:
```js
{
  chain_id: number
  id: string
  token_id: number
  collection_id: number
  quantity?: number
  name: string
  description?: string
  hash: string
  author: string
  collection_name?: string
  collection_address?: string
}
```

The hash is used to render the vox-model.
### get()

```js
feature.get('collectible')
// returns: [Object Collectible]
```

### set()

```js
feature.set({'collectible':myCollectible}) // myCollectible being a collectible object.
 ```

### default

`null`

## type
`String`;

### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'collectible-model'
```