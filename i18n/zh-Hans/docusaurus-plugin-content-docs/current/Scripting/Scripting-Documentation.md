# 脚本编程
包括在地块和功能中的脚本函数和事件。

## 脚本编程

脚本接口允许您在自己的服务器上运行JavaScript代码，并将更新发送到世界中。连接到世界的每个人都会看到您脚本化地块的相同视图。您可以在地块上的任何功能内编写脚本，并从该脚本访问其他功能。

一旦您拥有一个地块，就可以开始使用功能脚本引擎。在Cryptovoxels中，脚本编程主要是基于客户端的。也就是说，大多数脚本将由客户端而不是服务器运行。

层次结构如下：

- 世界
    - [地块对象](/docs/Scripting/Scripting-Documentation#the-parcel)
    - [功能对象](/docs/Scripting/Scripting-Documentation#feature-object)
    - [玩家对象](/docs/Scripting/Scripting-Documentation#player-object)
    - [基本GUI功能对象](/docs/Scripting/basic-gui-api)
    - [GUI控制对象](/docs/Scripting/Scripting-Documentation#guicontrol-object)

要获取脚本示例：[点击此处](/docs/Scripting/Examples)

:::警告
最新的文档可以在[blog.cryptovoxels.com](http://blog.cryptovoxels.com/scripting-bundle/)找到。
:::


      
### 地块
此部分包括所有地块通用的属性、函数和事件。

#### 属性

**ID** - `parcel.id = 500` - 返回一个整数，即地块的ID

**拥有者** - `parcel.owner = "0x..."` - 返回一个字符串，即地块的拥有者

**贡献者** - `parcel.contributors = []` - 返回一个数组，即地块的贡献者列表

**allowLoggedInOnly** - `parcel.allowLoggedInOnly = false`- 返回一个布尔值；当设置为true时，所有未登录的用户将被踢出。

**isPrivate** - `parcel.isPrivate = false`- 返回一个布尔值；返回地块是否为私人地块的布尔值。当设置为true时，将踢出未被允许进入地块的所有玩家。参见[允许、不允许](/docs/Scripting/Scripting-Documentation#allow-wallet-parcel-allow)。

**allowedWallets** - `parcel.allowedWallets = ["0x..."]`- 返回一个数组；如果地块是私人地块，则返回允许进入地块的钱包列表。不能设置，请使用[允许、不允许](/docs/Scripting/Scripting-Documentation#allow-wallet-parcel-allow)。

:::信息
注意：使用`isPrivate`将地块设为私人地块仍然需要用户首先进入地块，然后才会被踢出。`isPrivate`、`allow`和`disallow`在免费空间中被禁用。
:::

#### 函数

##### getFeatures - `parcel.getFeatures()`
- 返回：一个功能对象列表

```js
let features = parcel.getFeatures();
```

##### getFeatureById - `parcel.getFeatureById(id)` 
- 参数：**id** - 所需功能的id；一个 *字符串*
- 返回：一个功能对象

```js
let door = parcel.getFeatureById('door');
console.log('door:', door);
```

##### getFeatureByUuid - `parcel.getFeatureByUuid(Uuid)` 
- 参数：**Uuid** - 所需功能的Uuid；一个 *字符串*
- 返回：一个功能对象

```js
let feature = parcel.getFeatureById('3ed2bdd2-7570-485d-85b3-e5fd950bf3c6');
console.log('feature:', feature);
```

##### getFeaturesByType - `parcel.getFeaturesByType(type)` 
- 参数：**type** - 所需功能类型；一个 *字符串*
- 返回：一个功能对象列表

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
- 参数：**type** - 所需功能类型；一个 *字符串*
- 返回：一个功能对象

```js
let newFeature = parcel.createFeature('vox-model');
```

> 当创建功能时，其缩放和位置为[0,0,0]。
因此，请记得在创建后为其指定位置和缩放。要了解如何操作，请滚动到[功能对象](/docs/Scripting/Scripting-Documentation#feature-object) -:::警告
属性。
:::


##### removeFeature - `parcel.removeFeature(f)` 
- 参数：**f** - 要移除的功能；一个 *功能* 对象
- 返回：一个事件

```js
let chair = parcel.getFeatureById('chairvox')
parcel.removeFeature(chair);
```


##### getPlayers - `parcel.getPlayers()` 
- 参数：无
- 返回：一个玩家对象列表。

##### getPlayersWithinParcel - `parcel.getPlayersWithinParcel()` 
- 参数：无
- 返回：一个玩家对象列表。仅限在地块内的玩家

##### fetchSnapshots(callback?) - `parcel.fetchSnapshots(callback?)`
- 参数：（可选）当快照已被获取时调用的回调函数。回调函数必须有一个参数，这个参数将是一个快照的数组。
- 返回：void
- **注意**：这在空间中不起作用。

##### setSnapshot(snapshot_id) - `parcel.setSnapshot(snapshot_id)`
- 参数：表示所选快照的ID的整数。
- 返回：void
- **注意**：这在空间中不起作用。

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
**第一**，通过脚本将您的地块还原为快照时，它不会保存在服务器上（只有客户端可以看到）。还请注意，您的脚本将消失，因为它将被覆盖。
**第二**，如果在调用`setSnapshot`之后编辑了地块，它将在服务器上保存快照。
:::


##### allow(wallet) - `parcel.allow("0x..")` {#allow-wallet-parcel-allow}
将`wallet`添加到私人地块时允许的钱包列表中。
- 参数：一个钱包地址；
- 返回：void;

##### disallow(wallet) - `parcel.disallow("0x..")`
从私人地块时允许的钱包列表中删除`wallet`。
- 参数：一个钱包地址；
- 返回：void;

##### isWalletAllowedIfPrivate(wallet) - `parcel.isWalletAllowedIfPrivate("0x..")`
检查私人地块时`wallet`是否被允许进入。
- 参数：一个钱包地址；
- 返回：void;

### 地块事件

**玩家进入** - `parcel.on('playerenter', (e)=> {})` 
- 返回：一个包含玩家对象及其信息的事件`e`。
- 例如：`e.player.name -> 返回 "Fayelure"`
- 当玩家进入地块时触发

**玩家离开** - `parcel.on('playerleave', (e)=> {})` 
- 返回：一个包含玩家对象及其信息的事件`e`。
- 例如：`e.player.wallet -> 返回 "0xdbw2fr8..."`
- 当玩家离开地块时触发

**附近的玩家** - `parcel.on('playernearby', (e)=> {})` 
- 返回：一个包含玩家对象及其信息的事件`e`。
- 例如：`e.player.name -> 返回 "Fayelure"`
- 当玩家进入围绕地块的街道时触发

**玩家远离** - `parcel.on('playeraway', (e)=> {})` 
- 返回：一个包含玩家对象及其信息的事件`e`。
- 例如：`e.player.name -> 返回 "Fayelure"`
- 当玩家离开地块附近/街道时触发

### 玩家对象

可以从`parcel.getPlayers()`或`feature.on('click', e => console.log(e.player))`中获取。目前它只是一个对象，但将来会成为一个类。

#### 属性：

* `player.name` => 'captainbenis.eth'
* `player.wallet` => '0x2D891ED45C4C3EAB978513DF4B92a35Cf131d2e2'
* `player.uuid` => 该玩家实例的头像UUID（玩家可能在多个选项卡中打开具有单独头像的选项卡）

:::警告
有多种方法可以欺骗`player.wallet`和`player.name`，不要相信或向此地址发送资金。在将来为托管脚本服务器加强安全性时，我们将更新这些文档。
:::

#### 函数：

##### teleportTo(coordinates) - `player.teleportTo(coordinates)`
- 参数：坐标字符串，例如 `'N@43W,250N,1U'`
- 返回：void
- 在地块外禁用

##### hasWearable(tokenId,collectionId?) - `player.hasWearable(tokenId,collectionId)`
- 参数：一个整数 `tokenId`，即可穿戴物品的令牌ID，以及可穿戴物品所属集合的ID。
- 返回：true或false。

##### emote(emoji) - `player.emote('😋')`
- 参数：一个字符串；一个Cryptovoxels支持的表情符号。 
有关支持的表情符号列表，请参见[表情符号](/docs/Social#emojis)
您还可以在脚本中找到该列表`console.log(emojis)`。
- 返回：void
- 在地块外禁用
**注意：此功能受到500毫秒的节流**

##### animate(animation) - `player.animate('Dance')`
**由于它过于侵入性，此功能已被弃用。它将不再起作用（2022年3月）**
- 参数：一个字符串；动画的名称。
支持的动画列表如下：
```
Idle, Dance, Wave, Sitting, Spin, Savage, kick, Uprock, Floss, backflip
```
您还可以在脚本中找到该列表`console.log(animations)`。
- 返回：void
- 在地块外禁用
**注意：此功能受到10秒的节流**

##### hasEthereumNFT(contract,tokenId,successCallback?,failCallback?) - `player.hasEthereumNFT('0x...',5,(hasNFT)=>.., (reason)=>..`
- 参数： 
**合同：**字符串；交易的合同。
**tokenId：**字符串或数字；要检查所有权的令牌ID。
**successCallback：**函数；在成功时将调用的函数。给定的参数是一个布尔值，指示玩家是否拥有NFT。例如`(hasNFT)=>{console.log('玩家拥有NFT：',hasNFT})`
**failCallback：**函数；在失败时将调用的函数。给定的参数是API失败的原因字符串。
- 返回：void

##### kick() - `player.kick()`
- 参数：无
- 返回：无
- 在地块外禁用

#### 事件：

**move** - `player.on('move', (e)=> {...})` 
- 返回：一个事件e。

**click** - `player.on('click', (e)=> {...})` 
- 返回：一个事件e。

**chat** - `player.on('chat', (e)=> {...})` 
- 返回：一个包含聊天文本的事件e。

### 功能对象
此部分包括所有功能通用的属性、函数和事件。


:::信息
有关特定于功能的属性和方法，请转到[features](/docs/features)页面。


#### 属性

##### ID - `feature.id` 
- 返回：一个整数，功能的ID。
- 可以设置。例如：`feature.id = 'myvoxId' ` 

##### 类型 - `feature.type` 
- 返回：一个字符串，功能的类型。

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
- 位置是在地块空间中（而非世界空间）。
- 位置以米为单位。
:::info
请参阅[脚本示例](/docs/Scripting/Examples/Move-rotate-scale-Feature#h-1-positions)以获取有关位置的示例。
:::


##### 缩放 - `feature.scale` 
- 返回：一个形式为 [x（*double*），y（*double*），z（*double*）] 的矢量。
- 可以设置。例如：`feature.scale.set(0.75, 0.75, 0.75)`
	 或 `feature.scale.y = 0.75` 
   或 `feature.set({scale:[0.75,0.75,0.75]})` 
:::info
请参阅[脚本示例](/docs/Scripting/Examples/Move-rotate-scale-Feature#h-3-scaling)以获取有关缩放的示例。
:::


##### 旋转 - `feature.rotation` 
- 返回：一个形式为 [x（*double*），y（*double*），z（*double*）] 的矢量。
- 这是一个代理矢量对象。调用`set`，例如`feature.rotation.set(0, 0, 0)`
	 或 `feature.rotation.y = 3.14`。 
   或 `feature.set({rotation:[0,3.14,0]})` 
   
:::info
请参阅[脚本示例](/docs/Scripting/Examples/Move-rotate-scale-Feature#h-2-rotations)以获取有关旋转的示例。
:::
   
   
:::caution
虽然游戏内用户界面使用度数，但脚本引擎使用弧度。
3.14（*pi*）将使物品旋转180度。
:::


**注意：** 位置、缩放和旋转是`Vector3`对象，具有监视`x`、`y`和`z`更新的ES6代理。

- 调用`feature.position.x = 1` 是有效的。
- 调用`feature.position.copyFrom(new Vector3(1, 2, 3))` 是有效的。
- 调用`feature.position.set(1, 2, 3)` 是有效的。
- 调用`feature.position.addInPlace(new Vector3(4, 5, 6))` 是有效的。
- 等等。
- 调用`feature.position = new Vector3()` *将不起作用*。

##### 描述 - `feature.description`
- 返回：一个包含可以在对象上`set`的所有属性的字典。 
- 注意：不要改变返回的对象，假设它是只读的。调用`set`以更新描述中的属性。

#### 方法

##### 克隆 - `feature.clone()` 
- 返回：一个克隆功能

##### 移除 - `feature.remove()` 
从地块中移除功能
- 返回：无

##### 设置 - `feature.set({ url: 'http://', ... })` 
设置功能的属性
- 参数：一个包含键值对的对象，例如 {url:'http...'}
- 返回：无

##### 获取 - `feature.get('url')` 
获取功能的属性
- 返回：任意类型

##### 创建动画 - `feature.createAnimation('position')` 
参见[动画 API](/docs/Scripting/Animation-API)

##### 开始动画 - `feature.startAnimations([animation])` 
参见[动画 API](/docs/Scripting/Animation-API)

##### 创建基本GUI(id?,options?) - `feature.createBasicGui('id',...)` 
参见[GUI API](/docs/Scripting/Scripting-Documentation#Basic-GUI-Object)
- 返回一个FeatureBasicGui对象。

##### 移除GUI - `feature.removeGUI()` 
移除此功能上的GUI

#### 事件

##### 点击时
- 获取一个点击事件。可以通过点击`button`或`vox models`获得，也可以通过点击`image`、`vox-model`、`nft-model`、`particle-system`、`megavox`上的触发器获得。

```js

feature.on('click', (e)=> {
	console.log(e.player) // 玩家对象
  console.log(e.point) // 在地块空间中的点击矢量
  console.log(e.normal) // 在点击面上的法线矢量
})
``` 

##### 触发时
- 获取一个触发事件。类似于点击事件。但是，此事件仅由将`isTriggered`设置为`true`并且用户在触发器范围内的功能触发。

```js

feature.on('trigger', (e)=> {
	console.log(e.player) // 玩家对象
})
``` 

### 特定于功能

要了解特定于功能的属性，请转到您所需的[功能](/docs/features)并向下滚动到脚本属性。


### 基本GUI对象
此部分包括基本GUI的属性、函数和事件。

#### 属性

##### ID - `gui.id` 
- 返回：字符串，GUI的唯一ID。
- 可以设置。例如：`feature.id = 'myvoxId' ` 

##### Uuid - `gui.uuid` 
- 返回：字符串，GUI的唯一UUID。 

##### feature - `gui.feature` 
- 返回：功能，父功能

##### 显示中 - `gui.showing`
-

 返回GUI是否正在显示

##### 控件列表 - `gui.listOfControls` 
- 返回：guiControls的数组。

##### 默认控件 - `gui.defaultControl` 
- 返回默认控件的示例。

#### 方法

##### 添加按钮(text=null,positionInGrid=[0,0],id=null) - `gui.addButton('My button')` 
- **参数:**
	- text（可选）：一个字符串，
  - Id（可选）：一个字符串，
  - positionInGrid（可选）：一个包含2个整数的数组，第一个整数是行号，第二个是列号。
- **返回:** button类型的guiControl。

##### 添加文本(text=null,positionInGrid=[0,0],id=null) - `gui.addtext('My text')` 
- **参数:**
	- text（可选）：一个字符串，
  - positionInGrid（可选）：一个包含2个整数的数组，第一个整数是行号，第二个是列号。
- **返回:** text类型的guiControl。

##### 通过ID获取控件(id) - `gui.getControlById('buttonId')` 
- 参数：一个字符串
- 返回：一个guiControl或Null

##### 通过Uuid获取控件(id) - `gui.getControlByUuid('wdwdw-dwd-wd..')` 
- 参数：一个字符串
- 返回：一个guiControl或Null

##### 通过位置获取控件(array) - `gui.getControlByUuid([1,0])` 
- 参数：包含2个整数的数组。
- 返回：一个guiControl或Null

##### 显示 - `gui.show()` 
- 返回：无

##### 销毁 - `gui.destroy()` 
- 返回：无

### guiControl对象
此部分包括基本GUI的属性、函数和事件。

#### 属性

##### gui - `guiControl.gui` 
- 返回：一个FeatureBasicGui对象，父GUI

##### ID - `guiControl.id` 
- 返回：字符串，guiControl的ID。
- 可以设置。例如：`control.id = 'myId' ` 

##### Uuid - `guiControl.uuid` 
- 返回：字符串，guiControl的唯一UUID。 

##### 类型 - `guiControl.type` 
- 返回：字符串，guiControl的类型 
目前只能返回`button`或`text`

##### 文本 - `guiControl.text` 
- 返回：字符串，文本或按钮控件的文本

##### 位置在网格中 - `guiControl.positionInGrid` 
- 返回：包含2个整数的数组，控件在网格中的位置。 
默认为[0,0]

##### 摘要 - `guiControl.summary` 
- 返回：一个带有控件基本信息的对象。
- **对于在网格中的console.log很有用**

#### 方法

##### 更新 - `guiControl.update()` 
更新控件。
- 返回无


:::caution
更多最新文档请参阅[blog.cryptovoxels.com](http://blog.cryptovoxels.com/scripting-bundle/)
:::