# NFT 模型

## NFT 模型

允许您在虚拟世界中使用Opensea链接显示一个3D vox模型。它具有内置的GUI菜单，显示有关NFT的信息。

### 编辑器

![[nft-model]editor_5.57.png](/features/[nft-model]editor_5.57.png){.align-center}

#### URL

NFT的Opensea链接。

如果这个可收藏品是在cryptovoxels网站上铸造的可收藏品，它将显示一个带有“在Opensea上购买”的按钮的GUI菜单。

如果不是，则会显示一个包含较少信息的菜单。

## 脚本属性
## 脚本属性 {.tabset}
### url
`String`；链接必须以`https://`开头，并且必须是Opensea的链接。
例如：`https://opensea.io/assets/0xa58b5224e2fd94020cb2837231b2b0e4247301a6/3247`

#### 获取（get）

```js
feature.get('url')
// 返回："https://..."
```

#### 设置（set）

```js
feature.set({'url':"https://opensea.io/assets/0xa58b5224e2fd94020cb2837231b2b0e4247301a6/3247"})
```

#### 默认值

`""`

### 类型
`String`；

#### 获取（get）

```js
feature.get('type')
/* 或 */
feature.type

// 返回：'nft-model'
```