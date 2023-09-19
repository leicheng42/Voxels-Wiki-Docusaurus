# 如何购买一个地块
您可以通过首次销售或二次销售购买Cryptovoxels的地块

## 如何建设

在Cryptovoxels中，您可以放置类似Minecraft的方块（voxels）。

![building-intro.gif](/building/building-intro.gif)

您还可以使用[Megavox](/docs/features/megavox)作为建筑结构，[给对象添加动画](/docs/Scripting/Animation-API)，在您的地块上使用[脚本](/docs/Scripting/)以及[更多功能](/docs/features)。

![building-examples.gif](/building/building-examples.gif)

## 可以在哪里建设？
- 在您[拥有的地块](/docs/Parcels/Buy-a-parcel)上
- 在您是合作伙伴的地块上
- 在沙盒地块上
- 在免费的[空间](/docs/Spaces)

## 建设工具（侧边栏）
一旦进入或附近有可以建设的地块，工具栏将会从右侧滑入。

![build-sidebar.png](/building/build-sidebar.png)

**添加** - 使用此选项向地块添加新内容，如方块或功能
**编辑** - 使用此选项编辑、复制或移动功能，或自定义方块的纹理和色调
**快照** - 保存和加载地块的状态，用作备份功能或更改结构
**地块功能** - 按接近程度排序的地块功能列表

## 方块（voxels）
每个地块可以放置的方块数量有一个最大限制，可以在[地块页面](https://www.cryptovoxels.com/parcels/1)上找到。

![parcel-info.png](/building/parcel-info.png)

一旦进入或附近有可以建设的地块，您可以通过按下 **TAB** 键或单击右侧的 **添加按钮** 打开 *添加菜单*。
地块会被突出显示，然后 *添加菜单* 就会弹出。

![highlighted-parcel-edit.png](/building/highlighted-parcel-edit.png)

### 放置方块
![blocks-placing.gif](/building/blocks-placing.gif)

1. **右键点击**（...或按下 <kbd>TAB</kbd> 键或单击 **添加按钮**）以打开 *添加菜单*
2. 点击 **建造**
3. 放置您的方块（点击并拖动以放置多个方块）

#### 快速放置方块
![blocks-quick.gif](/building/blocks-quick.gif)
您可以绕过菜单，直接使用数字键进入建造模式。
1. 按下键盘上的 **数字键** 选择纹理并激活建造模式
   *(1 激活第一个纹理，2 激活第二个，依此类推)*
2. 放置您的方块

### 纹理和颜色
每个地块可以具有8种不同的方块颜色着色和16种不同的纹理。

#### 使用不同纹理放置方块
![blocks-texture.gif](/building/blocks-texture.gif)
1. **右键点击**
2. 在 Voxels 下选择一个纹理
3. 点击 **建造**
4. 放置您的方块

:::info
您可以使用数字键选择前10种纹理并进入建造模式，绕过菜单。
:::

#### 更改纹理
![blocks-texture-change.gif](/building/blocks-texture-change.gif)
1. 点击 **编辑按钮**
2. 点击要更改的纹理，或将图像拖动到槽位之一以替换它

:::info
如果您想恢复默认纹理，请在“编辑”菜单中单击“自定义 Voxels”旁边的“重置”按钮。
:::

#### 放置着色方块
![blocks-tint.gif](/building/blocks-tint.gif)

1. **右键点击**
2. 点击 **选择着色**
3. 选择一种颜色
4. 选择一个纹理
5. 点击 **建造**
6. 放置您的方块

#### 编辑着色颜色
![blocks-tint-edit.gif](/building/blocks-tint-edit.gif)
1. 点击 **编辑按钮**（按下 <kbd>ESC</kbd> 键或 **右键点击** 以获取光标）
2. 在底部选择8种颜色之一
3. 修改颜色

:::info
如果您想恢复默认的着色，单击颜色框旁边的“编辑”菜单中的“重置”按钮。
:::

### 绘制方块
![blocks-painting.gif](/building/blocks-painting.gif)
1. **右键点击**
2. 选择颜色和纹理
3. 点击 **绘制**
4. 点击并拖动到要更换的方块上

:::info
您可以在建造模式下按住 <kbd>CTRL / CMD</kbd> 键暂时激活绘制模式。
:::

### 擦除方块
![blocks-erasing.gif](/building/blocks-erasing.gif)
1. **右键点击**
2. 点击 **擦除**
3. 点击并拖动到要擦除的方块上

:::info
您可以在建造模式下按住 <kbd>SHIFT</kbd> 键暂时激活擦除模式。
:::

### 立方体（可贴纹理）
![blocks-cube.gif](/building/blocks-cube.gif)
一个[立方体](/docs/features/cube)实际上不是一个体素，而是一个[功能](/docs/Parcels/building_temp#features) - 这意味着您可以

像对待功能一样放置它并进行修改。
这意味着其他方块所使用的建造/绘制/擦除工具在这些方块上无法使用。

#### 立方体的独特之处在哪里？
- 您可以从网络或 womps 中提取图像并用作纹理
- 您可以切换碰撞（关闭时，头像可以穿过它）
- 每个使用的立方体的着色和纹理可以不同
- 您可以为其添加功能ID以进行脚本
- 您可以为其添加脚本
- 您可以旋转一个立方体
- 您可以调整一个立方体的大小

### 热键 - 建造
![blocks-numberkeys.gif](/building/blocks-numberkeys.gif)
- **右键点击** / <kbd>TAB</kbd> / <kbd>B</kbd> **-** 激活建造模式
- <kbd>1</kbd> / <kbd>2</kbd> / <kbd>3</kbd> / <kbd>4</kbd> / <kbd>5</kbd> / <kbd>6</kbd> / <kbd>7</kbd> / <kbd>8</kbd> / <kbd>9</kbd> / <kbd>0</kbd> **-** 使用前10种纹理激活建造模式

![blocks-numbers.png](/building/blocks-numbers.png)

#### 在建造模式中
![blocks-hotkeys.gif](/building/blocks-hotkeys.gif)
- **点击** **-** 放置方块
- **点击并拖动** **-** 放置多个方块
- <kbd>SHIFT</kbd> + **点击** **-** 擦除方块
- <kbd>SHIFT</kbd> + **点击并拖动** **-** 擦除多个方块
- <kbd>CTRL / CMD</kbd> + **点击** **-** 绘制方块
- <kbd>CTRL / CMD</kbd> + **点击并拖动** **-** 绘制多个方块

## 功能
从[NFTs](/docs/features/nft-image)到[VOX模型](/docs/features/vox-model)，功能在您的地块或空间中扮演着非常重要的角色。
有关功能的完整列表，请前往[此处](/docs/features)。

### 放置一个功能
在您拥有或具有合作权限的地块/空间中，打开 *添加菜单*。
从列表中选择一个功能，将其移动到所需位置，然后 **点击** 以放置它。

![features-placing.gif](/building/features-placing.gif)

:::caution
地块或空间中可以放置的功能数量是有限制的。请查看添加菜单以获取更多信息。
:::

### 编辑一个功能
每个功能都有其自己的参数可以调整。
**右键点击**（或按下 <kbd>e</kbd> 键并 **点击**）功能以编辑它，然后进行任何必要的调整。您也可以通过[地块功能](/docs/Parcels/building_temp#parcel-features-menu)找到并编辑该功能。

![features-editing.gif](/building/features-editing.gif)

### 复制一个功能
**右键点击** 功能，然后点击 **复制** 按钮，接着 **点击** 您想要复制功能的位置。
您还可以按下 <kbd>R</kbd> 键，然后 **点击** 功能，移动光标并 **点击** 您想要复制到的位置。

![features-replicating.gif](/building/features-replicating.gif)

### 移动一个功能
**右键点击** 功能，点击 **移动**，移动光标并 **点击** 您想要放置的位置。
您还可以按下 <kbd>M</kbd> 键，然后 **点击** 功能，移动光标并 **点击** 您想要移动到的位置。

![features-moving.gif](/building/features-moving.gif)

### 擦除一个功能
您可以通过功能的编辑菜单或通过[地块功能](/docs/Parcels/building_temp#parcel-features-menu)擦除一个功能。
**右键点击** 功能，然后点击 **删除**。

![features-deleting.gif](/building/features-deleting.gif)

### 资产库
这里有一个用户生成内容的库存。
要查看可用的内容，请打开 *添加菜单* 并单击 **浏览资产库**。

![features-library.png](/building/features-library.png)

在这里，您可以搜索对象、脚本、家具等！

![features-library2.png](/building/features-library2.png)

如果您想要添加到库存（可以是公开的或私有的），请编辑功能并点击 **+ 添加到库存**。

![features-library3.png](/building/features-library3.png)

### 热键 - 功能
这些热键使得复制、移动或编辑功能变得容易。
按下热键然后点击功能以使用它。

<kbd>R</kbd> - 激活复制功能模式
<kbd>M</kbd> - 激活移动功能模式
<kbd>E</kbd> / **右键点击** - 激活编辑功能模式

![features-hotkeys.gif](/building/features-hotkeys.gif)

## 地块功能菜单
地块功能菜单是您的地块中当前放置的所有功能的列表，**按接近程度排序**。
当您的地块被填满时，这是一个非常有用的工具！

![parcel-features.gif](/building/parcel-features.gif)

您也可以通过在功能旁边的复选框中单击来擦除或分组功能，并单击下面的按钮。有关分组功能的更多信息，请前往[此处](/docs/features/group)。

![parcel-features-delete.gif](/building/parcel-features-delete.gif)

## 地块快照
快照是您的地块的用户选择状态，您可以选择在以后返回。
在进行重大更改或为活

动交换您的地块时，请使用此功能备份（拍摄快照）和还原（恢复）您的地块。

![parcel-snapshots.gif](/building/parcel-snapshots.gif)

您还可以从您的地块页面上查看快照列表，并还原到不同状态。
（例如：https://www.cryptovoxels.com/parcels/1）

![parcel-admin.png](/building/parcel-admin.png)

## 地块名称/描述
在您的地块页面上（例如：https://www.cryptovoxels.com/parcels/1）您可以更改您的名称和描述。
单击您的地块名称右侧的铅笔图标或在 *描述* 下方修改此信息。

![parcel-name.png](/building/parcel-name.png)