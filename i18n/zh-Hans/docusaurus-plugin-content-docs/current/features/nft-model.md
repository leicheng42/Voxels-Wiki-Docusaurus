# NFT-model

Lets you display a 3d vox model in-world using an Opensea link. It has a built-in GUI menu that displays information about the nft.


## Editor

![[nft-model]editor_5.57.png](/features/[nft-model]editor_5.57.png){.align-center}

### URL

The Opensea URL of the nft.

If the collectible is a collectible minted on the cryptovoxels website, it will display a GUI menu with a button `Buy on Opensea`.

If not, it will display a menu with less information.

# Scripting Properties
# Scripting Properties {.tabset}
## url
`String`; Links must be `https://` and must be a link from opensea.
eg: `https://opensea.io/assets/0xa58b5224e2fd94020cb2837231b2b0e4247301a6/3247`

### get()

```js
feature.get('url')
// returns: "https://..."
```

### set()

```js
feature.set({'url':"https://opensea.io/assets/0xa58b5224e2fd94020cb2837231b2b0e4247301a6/3247"})
```

### default

`""`

## type
`String`;

### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'nft-model'
```