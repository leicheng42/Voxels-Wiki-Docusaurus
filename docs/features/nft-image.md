## NFT Image

For NFTs you own, the NFT image will appear with a shiny frame.

![nft-image-example.png](/nft-image-example.png)

### Editor

![[nft-image]editor_v7.18.png](/features/[nft-image]editor_v7.18.png)

#### Opensea Asset URL

Copy in the asset URL from OpenSea.

#### stretch

Stretches an image to fit the scale.

#### Blend Mode

This is used to determine how the image is blended with the content behind it. The available options are Combine, Multiply, and Screen.

#### Transparency mode

Choose how alpha is treated. (ignored or not)

#### EmissiveColor intensity

Choose the intensity of brightness.

#### Gui

If ticked, clicking on this NFT will show an HTML UI with information about the NFT

## Scripting Properties
## Scripting Properties {.tabset}
### url
`String`; Links must be `https://`.

#### get()

```js
feature.get('url')
// returns: "https://..."
```

#### set()

```js
feature.set({'url':"https://www.opensea.io/"})
```

#### default

`""`

### stretch
`Boolean`; 

#### get()

```js
feature.get('stretch')
// returns: "https://..."
```

#### set()

```js
feature.set({'stretch':true})
```

#### default

`false`

### blendMode
`ImageMode`; An enum :
- 'Multiply'
- 'Screen'
- 'Combine'

#### get()

```js
feature.get('blendMode')
// returns: "Multiply"
```

#### set()

```js
feature.set({'blendMode':"Combine"})
```

#### default

`Combine`

### emissiveColorIntensity
`number`; 

#### get()

```js
feature.get('emissiveColorIntensity')
// returns: "0.5"
```

#### set()

```js
feature.set({'emissiveColorIntensity':0.5})
```

#### default

`0.5`

### type
`String`;

#### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'nft-image'
```

## Scripting Methods
## Scripting Methods {.tabset}
### getNftData
A function that returns the opensea nftData of the specified feature.

- Arguments: callback (optional); a callback function to handle the nft's data.

#### example

```js
feature.getNftData(console.log)
/* returns: 
{
animation_original_url: "https://ipfsga..."
animation_url: "https://stora..."
asset_contract: {...}
...
}
```

#### example 2

```js

function showContractAddress(data){
 console.log(data.asset_contract.address) 
}

feature.getNftData(showContractAddress)
/* returns: 0x1das1rs6dfv...

```

