# 收藏品模型

## 收藏品模型

允许您显示Cryptovoxels收藏品的3D表示。它具有内置的UI窗口，显示有关NFT的信息。

![[collectible_model]example_v7.18.png](/features/[collectible_model]example_v7.18.png)

### 编辑器

![[collectible_model]editor_v7.18.png](/features/[collectible_model]editor_v7.18.png)

## 脚本属性
## 脚本属性 {.tabset}
### 收藏品
`对象`；一个带有多个属性的对象。
属性：
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

哈希值用于呈现体素模型。
#### 获取()

```js
feature.get('collectible')
// 返回值：[收藏品对象 Collectible]
```

#### 设置()

```js
feature.set({'collectible':myCollectible}) // myCollectible是一个收藏品对象。
 ```

#### 默认值

`null`

### 类型
`字符串`；

#### 获取()

```js
feature.get('type')
/* 或者 */
feature.type

// 返回值：'collectible-model'
```