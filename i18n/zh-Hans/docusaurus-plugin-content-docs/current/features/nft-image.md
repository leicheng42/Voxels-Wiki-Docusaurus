# NFT 图像
非同质代币（NFT）的二维图像。

## NFT 图像

对于您拥有的NFT，NFT图像将显示为带有闪亮边框的图像。

![nft-image-example.png](/nft-image-example.png)

### 编辑器

![[nft-image]editor_v7.18.png](/features/[nft-image]editor_v7.18.png)

#### Opensea 资产 URL

复制来自OpenSea的资产URL。

#### stretch

将图像拉伸以适应比例。

#### 混合模式

用于确定图像与其后面的内容混合方式。可用选项包括合并（Combine）、相乘（Multiply）和屏幕（Screen）。

#### 透明度模式

选择如何处理 alpha 通道（是否忽略）。

#### 自发光颜色强度

选择亮度的强度。

#### GUI

如果勾选，单击此NFT将显示有关NFT的HTML界面信息。

## 脚本属性
## 脚本属性 {.tabset}
### url
`String`；链接必须以`https://`开头。

#### 获取（get）

```js
feature.get('url')
// 返回："https://..."
```

#### 设置（set）

```js
feature.set({'url':"https://www.opensea.io/"})
```

#### 默认值

`""`

### stretch
`Boolean`；

#### 获取（get）

```js
feature.get('stretch')
// 返回：true 或 false
```

#### 设置（set）

```js
feature.set({'stretch':true})
```

#### 默认值

`false`

### blendMode
`ImageMode`；枚举：
- 'Multiply'（相乘）
- 'Screen'（屏幕）
- 'Combine'（合并）

#### 获取（get）

```js
feature.get('blendMode')
// 返回："Multiply" 或其他选项
```

#### 设置（set）

```js
feature.set({'blendMode':"Combine"})
```

#### 默认值

`Combine`

### emissiveColorIntensity
`number`；

#### 获取（get）

```js
feature.get('emissiveColorIntensity')
// 返回：0.5 或其他值
```

#### 设置（set）

```js
feature.set({'emissiveColorIntensity':0.5})
```

#### 默认值

`0.5`

### type
`String`；

#### 获取（get）

```js
feature.get('type')
/* 或 */
feature.type

// 返回：'nft-image'
```

## 脚本方法
## 脚本方法 {.tabset}
### getNftData
返回指定特征的opensea nftData 的函数。

- 参数：callback（可选）；用于处理NFT数据的回调函数。

#### 示例

```js
feature.getNftData(console.log)
/* 返回：
{
animation_original_url: "https://ipfsga..."
animation_url: "https://stora..."
asset_contract: {...}
...
}
```

#### 示例 2

```js

function showContractAddress(data){
 console.log(data.asset_contract.address) 
}

feature.getNftData(showContractAddress)
/* 返回：0x1das1rs6dfv...

```
