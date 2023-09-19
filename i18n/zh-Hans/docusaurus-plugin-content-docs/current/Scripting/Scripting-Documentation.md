# 脚本
包括在地块和特性中的脚本函数和事件。

## 脚本

脚本接口允许您在自己的服务器上运行 JavaScript 代码并将更新发送到世界中。连接到该世界的每个人都会看到您脚本化地块的相同视图。您可以在地块上的任何特性中编写脚本，并从该脚本访问其他特性。

一旦您拥有一个地块，您就可以开始使用特性脚本引擎。Cryptovoxels 中的脚本编写主要基于客户端。也就是说，大多数脚本将由客户端执行，而不是服务器。

层次结构如下：

- 世界
	- [地块对象](/docs/Scripting/Scripting-Documentation#the-parcel)
  - [特性对象](/docs/Scripting/Scripting-Documentation#feature-object)
  - [玩家对象](/docs/Scripting/Scripting-Documentation#player-object)
  - [基本 GUI 对象](/docs/Scripting/basic-gui-api)
  - [GUI 控件对象](/docs/Scripting/Scripting-Documentation#guicontrol-object)
      
脚本示例：[点击这里](/docs/Scripting/Examples)

:::警告
更新的文档版本请参阅 [blog.cryptovoxels.com](http://blog.cryptovoxels.com/scripting-bundle/)
:::


      
### 地块
本节包括了适用于所有地块的属性、方法和事件。

#### 属性

**ID** - `parcel.id = 500` - 返回一个整数，表示地块的ID。

**Owner** - `parcel.owner = "0x..."` - 返回一个字符串，表示地块的所有者。

**Contributors** - `parcel.contributors = []` - 返回一个数组，表示地块的贡献者列表。

**allowLoggedInOnly** - `parcel.allowLoggedInOnly = false`- 返回一个布尔值；当设置为 true 时，所有未登录的用户将被踢出。

**isPrivate** - `parcel.isPrivate = false`- 返回一个布尔值；返回地块是否为私有。当设置为 true 时，不允许进入地块的所有玩家将被踢出。请参阅 [allow,disallow](/docs/Scripting/Scripting-Documentation#allow-wallet-parcel-allow)。

**allowedWallets** - `parcel.allowedWallets = ["0x..."]`- 返回一个数组；如果地块是私有的，则返回允许进入地块的钱包列表。不能设置，使用 [allow,disallow](/docs/Scripting/Scripting-Documentation#allow-wallet-parcel-allow)。

:::信息
注意：使用 `isPrivate` 将地块设置为私有后，用户仍然需要先进入地块，然后才会被踢出。`isPrivate`、`allow` 和 `disallow` 在自由空间中被禁用。
:::

#### 方法

##### getFeatures - `parcel.getFeatures()`
- 返回：特性对象列表

```js
let features = parcel.getFeatures();
```

##### getFeatureById - `parcel.getFeatureById(id)` 
- 参数：**id** - 所需特性的id；一个*字符串*
- 返回：一个特性对象

```js
let door = parcel.getFeatureById('door');
console.log('door:', door);
```

##### getFeatureByUuid - `parcel.getFeatureByUuid(Uuid)` 
- 参数：**Uuid** - 所需特性的Uuid；一个*字符串*
- 返回：一个特性对象

```js
let feature = parcel.getFeatureById('3ed2bdd2-7570-485d-85b3-e5fd950bf3c6');
console.log('feature:', feature);
```

##### getFeaturesByType - `parcel.getFeaturesByType(type)` 
- 参数：**type** - 所需特性的类型；一个*字符串*
- 返回：特性对象列表

```js
let allVoxModels = parcel.getFeaturesByType('vox-model');
```
有效的类型包括：

- `'vox-model'`
- `'button'`
- `'image'`
- `'sign'`
- `'polytext'`
- `'audio'`
- `'nft-image'`
- `'megavox'`
- `'text-input'`
- `'slider-input'`
- `'video'`

##### createFeature - `parcel.createFeature(type)` 
- 参数：**type** - 所需特性的类型；一个*字符串*
- 返回：一个特性对象

```js
let newFeature = parcel.createFeature('vox-model');
```

> 创建特性时，默认的比例和位置为 [0,0,0]。因此，请记得创建后给它一个位置和比例。要了解如何执行此操作，请滚动到下方的 [特性对象](/docs/Scripting/Scripting-Documentation#feature-object) -:::警告
属性部分。
:::


##### removeFeature - `parcel.removeFeature(f)` 
- 参数：**f** - 要移除的特性；一个*特性*对象
- 返回：一个事件

```js
let chair = parcel.getFeatureById('chairvox')
parcel.removeFeature(chair);
```


##### getPlayers - `parcel.getPlayers()` 
- 参数：无
- 返回：玩家对象列表。

##### getPlayersWithinParcel - `parcel.getPlayersWithinParcel()` 
- 参数：无
- 返回：玩家对象列表。仅限于地块内的玩家

##### fetchSnapshots(callback?) - `parcel.fetchSnapshots(callback?)`
- 参数：（可选）在获取快照时调用的回调函数。回调函数必须有一个参数，它将是一个快照数组。
- 返回：无
- **注意**：这在自由空间中不起作用。

##### setSnapshot(snapshot_id) - `parcel.setSnapshot(snapshot_id)`
- 参数：代表所选快照的id的整数。
- 返回：无
- **注意**：这在自由空间中不起作用。

示例： 
```js
function myCallback(snapshots){
  parcel.setSnapshot(snapshots[0].id)
}

feature.on('click',e=>{
  parcel.fetchSnapshots(myCallback)
})
```
:::警告


**请记住两件事：**
**一**，通过脚本将您的地块还原到快照后，它不会保存在服务器上。（只有客户端可以看到）。还要注意，您的脚本将消失，因为它将被覆盖。
**二**，如果您在调用 `setSnapshot` 后编辑地块，它将在服务器上保存快照。
:::


##### allow(wallet) - `parcel.allow("0x..")` {#allow-wallet-parcel-allow}
将 `wallet` 添加到地块为私有时允许的钱包列表中。
- 参数：一个钱包地址；
- 返回：无；

##### disallow(wallet) - `parcel.disallow("0x..")`
从地块为私有时允许的钱包列表中移除 `wallet`。
- 参数：一个钱包地址；
- 返回：无；

##### isWalletAllowedIfPrivate(wallet) - `parcel.isWalletAllowedIfPrivate("0x..")`
检查 `wallet` 是否在地块为私有时被允许进入内部。
- 参数：一个钱包地址；
- 返回：无；

### 地块事件

**玩家进入** - `parcel.on('playerenter', (e)=> {})` 
- 返回：一个事件 `e` 包含一个玩家对象，其中包含了玩家的信息。
- 例如：`e.player.name -> 返回 "Fayelure"`
- 当玩家进入地块时触发

**玩家离开** - `parcel.on('playerleave', (e)=> {})` 
- 返回：一个事件 `e` 包含一个玩家对象，其中包含了玩家的信息。
- 例如：`e.player.wallet -> 返回 "0xdbw2fr8..."`
- 当玩家离开地块时触发

**玩家附近** - `parcel.on('playernearby', (e)=> {})` 
- 返回：一个事件 `e` 包含一个玩家对象，其中包含了玩家的信息。
- 例如：`e.player.name -> 返回 "Fayelure"`
- 当玩家进入地块周围的街道时触发

**玩家远离** - `parcel.on('playeraway', (e)=> {})` 
- 返回：一个事件 `e` 包含一个玩家对象，其中包含了玩家的信息。
- 例如：`e.player.name -> 返回 "Fayelure"`
- 当玩家离开地块附近/街道区域时触发

### 玩家对象

可以通过 `parcel.getPlayers()` 或 `feature.on('click', e => console.log(e.player))` 获取玩家对象。目前只是一个对象，但将来将成为一个类。

#### 属性:

* `player.name` => 'captainbenis.eth'
* `player.wallet` => '0x2D891ED45C4C3EAB978513DF4B92a35Cf131d2e2'
* `player.uuid` => 该玩家实例的 avatar uuid（玩家可能在多个标签页中具有单独的 avatar）

:::警告
存在多种欺骗 `player.wallet` 和 `player.name` 的方法，请勿信任或向此地址发送资金。在未来，我们将会加强托管脚本服务器的安全性，并在这方面更新文档。
:::

#### 函数:

##### teleportTo(coordinates) - `player.teleportTo(coordinates)`
- 参数：一个坐标的字符串，例如 `'N@43W,250N,1U'`
- 返回：无
- 在地块外的玩家上被禁用
[查看示例](/docs/Scripting/Examples/teleport-player)

##### hasWearable(tokenId,collectionId?) - `player.hasWearable(tokenId,collectionId)`
- 参数：一个 `tokenId` 整数，代表可穿戴物品的 token id，以及可穿戴物品所属集合的 id。
- 返回：true 或 false。

##### emote(emoji) - `player.emote('😋')`
- 参数：一个字符串；一个由 cryptovoxels 支持的表情符号。有关受支持的表情符号列表，请参阅 [表情符号](/docs/Social#emojis)。
您也可以在脚本

中找到此列表 `console.log(emojis)`。
- 返回：无
- 在地块外的玩家上被禁用
**注意：此功能限制为 500 毫秒**

##### animate(animation) - `player.animate('Dance')`
**此功能已被弃用，因为它过于侵入性。它将不再起作用（2022 年 3 月）**
- 参数：一个字符串；动画的名称。
支持的动画列表如下：
```
Idle, Dance, Wave, Sitting, Spin, Savage, kick, Uprock, Floss, backflip
```
您也可以在脚本中找到此列表 `console.log(animations)`。
- 返回：无
- 在地块外的玩家上被禁用
**注意：此功能限制为 10 秒**

##### hasEthereumNFT(contract,tokenId,successCallback?,failCallback?) - `player.hasEthereumNFT('0x...',5,(hasNFT)=>.., (reason)=>..`
- 参数：
**Contract:** 字符串；交易的合约。
**tokenId:** 字符串或数字；要检查所有权的代币 ID。
**successCallback:** 函数；在成功时调用的函数。给定的参数是一个布尔值，指示玩家是否拥有 NFT。例如 `(hasNFT)=>{console.log('player has NFT :',hasNFT})`
**failCallback:** 函数；在失败时调用的函数。给定的参数是一个字符串，表示 API 失败的原因。
- 返回：无

##### kick() - `player.kick()`
- 参数：无
- 返回：无
- 在地块外的玩家上被禁用

#### 事件:

**move** - `player.on('move', (e)=> {...})` 
- 返回：一个事件 e。

**click** - `player.on('click', (e)=> {...})` 
- 返回：一个事件 e。

**chat** - `player.on('chat', (e)=> {...})` 
- 返回：一个事件 e 包含聊天文本。

### 特性对象
此部分包括所有特性共有的属性、函数和事件。
:::信息
有关特定于特性的属性和方法，请转到所需的[特性](/docs/features)，然后向下滚动到脚本属性。
:::


#### 属性

##### ID - `feature.id` 
- 返回：一个整数；特性的 ID。
- 可以设置。例如：`feature.id = 'myvoxId' ` 

##### 类型 - `feature.type` 
- 返回：一个字符串；特性的类型。

类型包括：
- 'vox-model'
- 'button'
- 'image'
- 'sign'
- 'polytext'
- 'richtext'
- 'audio'
- 'video'
- 'youtube'
- 'nft-image'
- 'megavox'
- 'text-input'
- 'spawn-point'

##### 位置 - `feature.position` 
- 返回：一个形式为 [x（*double*），y（*double*），z（*double*）] 的矢量。
- 可以设置。例如：`feature.position.set(1, 0.72, 2)`
	 或 `feature.position.y = 0.72` 
   或 `feature.set({position:[1,0.72,2]})` 
- 位置在地块空间内（而非世界空间）
- 位置以米为单位
:::信息
请参阅 [脚本示例](/docs/Scripting/Examples/Move-rotate-scale-Feature#h-1-positions) 获取位置示例
:::


##### 缩放 - `feature.scale` 
- 返回：一个形式为 [x（*double*），y（*double*），z（*double*）] 的矢量。
- 可以设置。例如：`feature.scale.set(0.75, 0.75, 0.75)`
	 或 `feature.scale.y = 0.75` 
   或 `feature.set({scale:[0.75,0.75,0.75]})` 
:::信息
请参阅 [脚本示例](/docs/Scripting/Examples/Move-rotate-scale-Feature#h-3-scaling) 获取缩放示例
:::


##### 旋转 - `feature.rotation` 
- 返回：一个形式为 [x（*double*），y（*double*），z（*double*）] 的矢量。
- 这是一个代理矢量对象。在其上调用 `set`，例如 `feature.rotation.set(0, 0, 0)`
	 或 `feature.rotation.y = 3.14`。 
   或 `feature.set({rotation:[0,3.14,0]})` 
   
:::信息
请参阅 [脚本示例](/docs/Scripting/Examples/Move-rotate-scale-Feature#h-2-rotations) 获取旋转示例
:::
   
   
:::警告
尽管游戏中的用户界面使用度数，但脚本引擎使用弧度。
3.14（*pi*）将项目旋转 180 度。
:::


**注意：** 位置、缩放和旋转都是 `Vector3` 对象，其中 ES6 代理监视 `x`、`y` 和 `z` 的更新。

- 调用 `feature.position.x = 1` 是有效的。
- 调用 `feature.position.copyFrom(new Vector3(1, 2, 3))` 是有效的
- 调用 `feature.position.set(1, 2, 3)` 是有效的。
- 调用 `feature.position.addInPlace(new Vector3(4, 5, 6))` 是有效的
- 等等。
- 调用 `feature.position = new Vector3()` *不起作用*。

##### 描述 - `feature.description`
- 返回：一个包含对象上可以 `set` 的所有属性的字典。 
- 注意：不要改变返回的对象，假设它是只读的。调用 `set` 以更新描述中的属性。

#### 方法


##### 克隆() - `feature.clone()`
- 返回：一个克隆的特性

##### 移除() - `feature.remove()`
从地块中移除特性
- 返回：无

##### 设置(dict) - `feature.set({ url: 'http://', ... })`


设置多个特性属性
- 参数：一个包含特性属性的字典对象
- 返回：无

##### 更新(dict) - `feature.update({ url: 'http://', ... })`
- 参数：一个包含特性属性的字典对象
- 返回：无

##### 保存快照() - `feature.saveSnapshot()`
将特性的当前状态保存到一个快照列表中
- 返回：快照 ID

##### 恢复快照(snapshot_id) - `feature.restoreSnapshot(snapshot_id)`
恢复指定快照的状态
- 参数：一个整数；要恢复的快照 ID
- 返回：无

#### 事件

**点击** - `feature.on('click', (e)=> {})` 
- 返回：一个事件 e。

**悬停** - `feature.on('hover', (e)=> {})` 
- 返回：一个事件 e。

**悬停停止** - `feature.on('hoverstop', (e)=> {})` 
- 返回：一个事件 e。

**移动** - `feature.on('move', (e)=> {})` 
- 返回：一个事件 e。

**聊天** - `feature.on('chat', (e)=> {})` 
- 返回：一个事件 e 包含聊天文本。

**特性被点击** - `feature.on('click', (e)=> {})` 
- 返回：一个事件 e。

**特性被悬停** - `feature.on('hover', (e)=> {})` 
- 返回：一个事件 e。

**特性悬停停止** - `feature.on('hoverstop', (e)=> {})` 
- 返回：一个事件 e。

**特性移动** - `feature.on('move', (e)=> {})` 
- 返回：一个事件 e。

**特性聊天** - `feature.on('chat', (e)=> {})` 
- 返回：一个事件 e 包含聊天文本。

### 基本 GUI 对象
GUI 对象表示 UI 元素。例如按钮、文本输入等。

#### 属性

##### ID - `guiControl.id` 
- 返回：一个整数；GUI 控件的 ID。
- 可以设置。例如：`guiControl.id = 'myButtonId'` 

##### 类型 - `guiControl.type` 
- 返回：一个字符串；GUI 控件的类型。

类型包括：
- 'button'
- 'image'
- 'text'
- 'input'
- 'checkbox'
- 'radio'
- 'dropdown'
- 'slider'
- 'video'
- 'youtube'

##### 位置 - `guiControl.position` 
- 返回：一个形式为 [x（*double*），y（*double*）] 的矢量。
- 可以设置。例如：`guiControl.position.set(0.1, 0.5)`
	 或 `guiControl.position.y = 0.5` 
   或 `guiControl.set({position:[0.1,0.5]})` 
- 位置在屏幕空间内
- 位置以像素为单位
:::信息
请参阅 [脚本示例](/docs/Scripting/Examples/Move-rotate-scale-Gui-Control#h-1-positions) 获取位置示例
:::

##### 缩放 - `guiControl.scale` 
- 返回：一个形式为 [x（*double*），y（*double*）] 的矢量。
- 可以设置。例如：`guiControl.scale.set(0.5, 0.5)`
	 或 `guiControl.scale.y = 0.5` 
   或 `guiControl.set({scale:[0.5,0.5]})` 
:::信息
请参阅 [脚本示例](/docs/Scripting/Examples/Move-rotate-scale-Gui-Control#h-3-scaling) 获取缩放示例
:::


##### 大小 - `guiControl.size` 
- 返回：一个形式为 [x（*double*），y（*double*）] 的矢量。
- 可以设置。例如：`guiControl.size.set(200, 50)`
	 或 `guiControl.size.y = 50` 
   或 `guiControl.set({size:[200,50]})` 
- 大小以像素为单位
:::信息
请参阅 [脚本示例](/docs/Scripting/Examples/Move-rotate-scale-Gui-Control#h-2-sizes) 获取大小示例
:::


##### 标题 - `guiControl.title` 
- 返回：一个字符串；GUI 控件的标题。

##### 文本 - `guiControl.text` 
- 返回：一个字符串；GUI 控件的文本。

##### 复选框选中状态 - `guiControl.checked` 
- 返回：一个布尔值；指示复选框是否被选中。

##### 下拉菜单选中项 - `guiControl.selected` 
- 返回：一个整数；指示下拉菜单中选择的选项的索引。

#### 方法


##### 克隆() - `guiControl.clone()`
- 返回：一个克隆的 GUI 控件

##### 移除() - `guiControl.remove()`
从 GUI 中移除控件
- 返回：无

##### 设置(dict) - `guiControl.set({ title: 'Title', ... })`
设置多个 GUI 控件属性
- 参数：一个包含 GUI 控件属性的字典对象
- 返回：无

##### 更新(dict) - `guiControl.update({ title: 'Title', ... })`
- 参数：一个包含 GUI 控件属性的字典对象
- 返回：无

#### 事件

**点击** - `guiControl.on('click', (e)=> {})` 
- 返回：一个事件 e。

**悬停** - `guiControl.on('hover', (e)=> {})` 
- 返回：一个事件 e。

**悬停停止** - `guiControl.on('hoverstop', (e)=> {})` 
- 返回：一个事件 e。

**输入** - `guiControl.on('input', (e)=> {})` 
- 返回：一个事件 e 包含输入文本。

**变化** - `guiControl.on('change', (e)=> {})` 
- 返回：一个事件 e 包含控件的新值。

**点击** - `guiControl.on('click', (e)=> {})` 
- 返回：一个事件 e。

**悬停** - `guiControl.on('hover', (e)=> {})` 
- 返回：一个事件 e。

**悬停停止** - `guiControl.on('hoverstop', (e)=> {})` 
- 返回：一个事件 e。

**输入** - `guiControl.on('input', (e)=> {})` 
- 返回：一个事件 e

 包含输入文本。

**变化** - `guiControl.on('change', (e)=> {})` 
- 返回：一个事件 e 包含控件的新值。

### 其他

#### 主机对象

主机对象提供了一些有关游戏状态和设置的信息。

#### 属性

##### 按钮状态 - `host.buttons` 
- 返回：一个包含当前按钮状态的对象。例如：`{menu: false, mouselook: false, stats: false}`

##### 音频状态 - `host.audio` 
- 返回：一个包含当前音频状态的对象。例如：`{mute: false}`

##### 光标状态 - `host.cursor` 
- 返回：一个包含当前光标状态的对象。例如：`{visible: false, locked: false}`

##### 视口尺寸 - `host.viewport` 
- 返回：一个包含当前视口尺寸的对象。例如：`{width: 800, height: 600}`

##### 时间 - `host.time` 
- 返回：一个包含当前游戏时间的对象。例如：`{day: 1, month: 12, year: 2022, hour: 12, minute: 30, second: 45}`

##### 位置 - `host.position` 
- 返回：一个包含当前位置的对象。例如：`{x: 43.123, y: 1.234, z: -234.45}`

#### 方法

##### 获取玩家钱包 - `host.getWallet()` 
- 返回：一个字符串；当前玩家的以太坊钱包地址。

##### 获取当前玩家位置 - `host.getPosition()` 
- 返回：一个对象；包含当前玩家的位置。例如：`{x: 43.123, y: 1.234, z: -234.45}`

##### 获取指定地块上的所有特性 - `host.getFeatures(parcel_id)` 
- 参数：一个字符串；地块的 ID。
- 返回：一个包含所有特性的数组。

##### 获取指定特性的属性 - `host.getFeatureProperties(feature_id)` 
- 参数：一个字符串；特性的 ID。
- 返回：一个包含特性属性的对象。

##### 获取指定地块上的所有 GUI 控件 - `host.getGuiControls(parcel_id)` 
- 参数：一个字符串；地块的 ID。
- 返回：一个包含所有 GUI 控件的数组。

##### 获取指定 GUI 控件的属性 - `host.getGuiControlProperties(gui_control_id)` 
- 参数：一个字符串；GUI 控件的 ID。
- 返回：一个包含 GUI 控件属性的对象。

##### 获取指定地块上的所有玩家 - `host.getPlayers(parcel_id)` 
- 参数：一个字符串；地块的 ID。
- 返回：一个包含所有玩家的数组。

##### 获取指定玩家的属性 - `host.getPlayerProperties(player_wallet)` 
- 参数：一个字符串；玩家的以太坊钱包地址。
- 返回：一个包含玩家属性的对象。

##### 获取指定地块上的所有特性 - `host.getFeatures(parcel_id)` 
- 参数：一个字符串；地块的 ID。
- 返回：一个包含所有特性的数组。

##### 获取指定特性的属性 - `host.getFeatureProperties(feature_id)` 
- 参数：一个字符串；特性的 ID。
- 返回：一个包含特性属性的对象。

##### 获取指定地块上的所有 GUI 控件 - `host.getGuiControls(parcel_id)` 
- 参数：一个字符串；地块的 ID。
- 返回：一个包含所有 GUI 控件的数组。

##### 获取指定 GUI 控件的属性 - `host.getGuiControlProperties(gui_control_id)` 
- 参数：一个字符串；GUI 控件的 ID。
- 返回：一个包含 GUI 控件属性的对象。

### 系统事件

#### 地块事件

**地块被点击** - `host.on('click', (e)=> {})` 
- 返回：一个事件 e 包含点击位置的坐标。

#### 玩家事件

**玩家进入** - `host.on('playerenter', (e)=> {})` 
- 返回：一个事件 e 包含一个玩家对象，其中包含了玩家的信息。
- 例如：`e.player.name -> 返回 "Fayelure"`
- 当玩家进入地块时触发

**玩家离开** - `host.on('playerleave', (e)=> {})` 
- 返回：一个事件 e 包含一个玩家对象，其中包含了玩家的信息。
- 例如：`e.player.wallet -> 返回 "0xdbw2fr8..."`
- 当玩家离开地块时触发

**玩家附近** - `host.on('playernearby', (e)=> {})` 
- 返回：一个事件 e 包含一个玩家对象，其中包含了玩家的信息。
- 例如：`e.player.name -> 返回 "Fayelure"`
- 当玩家进入地块周围的街道时触发

**玩家远离** - `host.on('playeraway', (e)=> {})` 
- 返回：一个事件 e 包含一个玩家对象，其中包含了玩家的信息。
- 例如：`e.player.name -> 返回 "Fayelure"`
- 当玩家离开地块附近/街道区域时触发

### 事件属性

#### 通用事件属性

##### 停止传播 - `e.stopPropogation()`
停止事件传播到更高级别的容器或对象。例如，当您希望阻止一个按钮点击事件传播到包含它的面板时，可以使用此方法。

#### 玩家事件属性

##### 玩家对象 - `e.player`
包含了有关玩家的信息的对象。

**属性:**

* `player.name` => 'captainbenis.eth'
* `player.wallet` => '0x2D891ED45C4C3EAB978513DF4B92a35Cf131d2e2'
* `player.uuid` => 该玩家实例的 avatar uuid（玩家可能在多个标签页中具有单独的 avatar）

**函数:**

##### teleportTo(coordinates) - `e.player.teleportTo(coordinates)`
- 参数：一个坐标的字符串，例如 `'N@43W,250N,1U'`
- 返回：无
- 在地块外的玩家

上被禁用

##### getFeatures() - `e.player.getFeatures()`
- 返回：一个包含所有特性的数组

##### getGuiControls() - `e.player.getGuiControls()`
- 返回：一个包含所有 GUI 控件的数组

##### getPlayerProperties() - `e.player.getPlayerProperties()`
- 返回：一个包含玩家属性的对象

#### 地块事件属性

##### 点击位置 - `e.coordinates`
包含点击位置的坐标。

### 脚本示例

请参阅[脚本示例](/docs/Scripting/Examples)页面获取示例脚本，以了解如何使用这些属性、方法和事件。

### 关于脚本的注意事项

请注意以下事项：

1. 脚本引擎会限制某些功能的使用。例如，一些功能可能会被限制为在地块内执行，或者可能会有最大执行时间限制。这些限制可能会在特定功能的文档中进行说明。

2. 使用脚本时，请确保您的代码逻辑不会导致游戏崩溃或影响其他玩家的游戏体验。避免在循环中执行过于频繁的操作，以免对服务器性能产生负面影响。

3. 请注意，脚本的性能可能会受到各种因素的影响，包括服务器负载、网络延迟等。因此，建议您在编写脚本时采取一些最佳实践，以确保良好的性能和稳定性。

4. 在编写脚本时，建议先在测试环境中进行测试，以确保脚本的行为符合预期。

5. 脚本引擎的功能和接口可能会随着时间的推移而进行更新和扩展。请定期查阅更新的文档以获取最新信息。

希望这份文档对您有所帮助！如果您有任何其他问题或需要进一步的帮助，请随时询问。