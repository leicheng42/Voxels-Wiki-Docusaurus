# 如何建造（临时）

在Cryptovoxels中，您可以放置类似于Minecraft的体素（方块）。

![building-intro.gif](/building/building-intro.gif)

您还可以使用[Megavox](/docs/features/megavox)作为建筑结构，[动画对象](/docs/Scripting/Animation-API)，使用[脚本编写](/docs/Scripting/)以及[更多](/docs/features)与您的地块一起使用。

![building-examples.gif](/building/building-examples.gif)

## 您可以在哪里建造？
- 在您[拥有的](/docs/Parcels/Buy-a-parcel)地块上
- 在您是合作者的地块上
- 在沙盒地块上
- 在免费的[空间](/docs/Spaces)上

## 建筑工具（侧边栏）
一旦进入或周围有地块可以建造，工具将从右侧滑入。

![build-sidebar.png](/building/build-sidebar.png)

**添加** - 用于向地块添加新内容，如体素或特征
**编辑** - 用于编辑、复制或移动特征，或自定义体素纹理和着色
**快照** - 保存和加载地块的状态，用作备份功能或更改结构
**地块特征** - 按距离排序的地块内特征列表

## 体素（方块）
每个地块都有可以放置的最大方块数，显示在[地块页面](https://www.cryptovoxels.com/parcels/1)上。

![parcel-info.png](/building/parcel-info.png)

一旦进入或周围有可以建造的地块，您可以通过按下**TAB**键或单击右侧的**添加按钮**来打开*添加菜单*。
地块应该会被突出显示，*添加菜单*应该会弹出。

![highlighted-parcel-edit.png](/building/highlighted-parcel-edit.png)

### 放置方块
![blocks-placing.gif](/building/blocks-placing.gif)

1. **右键单击**（...或按<kbd>TAB</kbd>键或单击**添加按钮**）以打开*添加菜单*
1. 单击**构建**
1. 放置您的方块（单击并拖动以放置多个方块）

#### 快速放置方块
![blocks-quick.gif](/building/blocks-quick.gif)
您可以绕过菜单，直接进入建造模式，使用数字键。
1. 按下**数字键**选择纹理并激活建造模式
*（1激活第一个纹理，2激活第二个，依此类推）*
1. 放置您的方块

### 纹理和颜色
每个地块可以有8种不同的体素颜色着色和16种不同的纹理。
#### 放置具有不同纹理的方块
![blocks-texture.gif](/building/blocks-texture.gif)
1. **右键单击**
1. 在体素下选择一种纹理
1. 单击**构建**
1. 放置您的方块

:::info
您可以使用数字键选择前10种纹理并进入建造模式，绕过菜单。
:::

#### 更改纹理
![blocks-texture-change.gif](/building/blocks-texture-change.gif)
1. 单击**编辑按钮**
1. 单击要更改的纹理或将图像拖放到一个槽中以替换它

:::info
如果要恢复默认纹理，请单击自定义体素旁边的编辑菜单中的**重置**按钮。
:::

#### 放置彩色方块
![blocks-tint.gif](/building/blocks-tint.gif)

1. **右键单击**
1. 单击**选择色彩**
1. 选择一种颜色
1. 选择一种纹理
1. 单击**构建**
1. 放置您的方块

#### 编辑色彩
![blocks-tint-edit.gif](/building/blocks-tint-edit.gif)
1. 单击**编辑按钮**（按<kbd>ESC</kbd>或**右键单击**以获取光标）
1. 单击底部的8种颜色之一
1. 修改颜色

:::info
如果要恢复默认着色，请单击颜色框旁边的编辑菜单中的**重置**按钮。
:::

### 绘制方块
![blocks-painting.gif](/building/blocks-painting.gif)

1. **右键单击**
1. 选择着色和纹理
1. 单击**绘制**
1. 单击并拖动要替换的方块

:::info
在建造模式中，您可以通过按住<kbd>CTRL / CMD</kbd>键来暂时激活绘制模式。
:::

### 擦除方块
![blocks-erasing.gif](/building/blocks-erasing.gif)

1. **右键单击**
1. 单击**擦除**
1. 单击并拖动要擦除的方块

::

:info
在建造模式中，您可以通过按住<kbd>SHIFT</kbd>键来暂时激活擦除模式。
:::

### 立方体（可纹理）
![blocks-cube.gif](/building/blocks-cube.gif)
[Cube](/docs/features/cube)实际上不是一个体素，而是一个[特征](/docs/Parcels/building_temp#features) - 这意味着您可以像特征一样放置它并修改它。
这意味着其他方块使用的建造/绘制/擦除工具对这些方块不起作用。
#### 什么使立方体不同？
- 您可以从互联网或womps中提取图像并用作纹理
- 您可以切换碰撞（如果关闭，角色可以穿过它）
- 不同的立方体可以具有不同的着色和纹理
- 您可以为其添加特征ID以供脚本使用
- 您可以为其添加脚本
- 您可以旋转立方体
- 您可以调整立方体的大小

### 热键 - 建造
![blocks-numberkeys.gif](/building/blocks-numberkeys.gif)
- **右键单击** / <kbd>TAB</kbd> / <kbd>B</kbd> **-** 激活建造模式
- <kbd>1</kbd> / <kbd>2</kbd> / <kbd>3</kbd> / <kbd>4</kbd> / <kbd>5</kbd> / <kbd>6</kbd> / <kbd>7</kbd> / <kbd>8</kbd> / <kbd>9</kbd> / <kbd>0</kbd> **-** 使用前10种纹理激活建造模式

![blocks-numbers.png](/building/blocks-numbers.png)

#### 在建造模式中
![blocks-hotkeys.gif](/building/blocks-hotkeys.gif)
- **单击** **-** 放置方块
- **单击并拖动** **-** 放置多个方块
- <kbd>SHIFT</kbd> + **单击** **-** 擦除方块
- <kbd>SHIFT</kbd> + **单击并拖动** **-** 擦除多个方块
- <kbd>CTRL / CMD</kbd> + **单击** **-** 绘制方块
- <kbd>CTRL / CMD</kbd> + **单击并拖动** **-** 绘制多个方块

## 特征
从[NFTs](/docs/features/nft-image)到[VOX模型](/docs/features/vox-model)，特征在您的地块或空间中起着非常重要的作用。
有关特征的完整列表，请转到[这里](/docs/features)。

### 放置特征
在您拥有或具有合作权限的地块/空间中，打开*添加菜单*。
从列表中选择一个特征，将其移动到所需位置，然后**单击**以放置它。

![features-placing.gif](/building/features-placing.gif)

:::caution
地块或空间中可以放置的特征数量是有限的。请查看添加菜单以获取更多信息。
:::

### 编辑特征
每个特征都有其自己的参数可供调整。
**右键单击**（或按<kbd>e</kbd>并**单击**）特征以编辑它，然后进行任何必要的调整。您还可以通过[地块特征](/docs/Parcels/building_temp#parcel-features-menu)查找和编辑特征。

![features-editing.gif](/building/features-editing.gif)

#### 使用3D gizmo
单击对象后，旁边将出现一个3D gizmo。
使用3D gizmo，您可以移动对象并旋转对象。

（有错误）

### 复制特征
**右键单击**特征，然后单击**复制**按钮，然后**单击**要复制的特征的位置。
您也可以按<kbd>R</kbd>，然后**单击**特征，移动光标，然后**单击**要复制的位置。

![features-replicating.gif](/building/features-replicating.gif)

### 移动特征
**右键单击**特征，然后单击**移动**，移动光标，然后单击要放置它的位置。
您也可以按<kbd>M</kbd>，然后**单击**特征，移动光标，然后**单击**要移动的位置。

![features-moving.gif](/building/features

-moving.gif)

### 擦除特征
您可以通过特征的编辑菜单或通过[地块特征](/docs/Parcels/building_temp#parcel-features-menu)来擦除特征。
**右键单击**特征，然后单击**删除**。

![features-deleting.gif](/building/features-deleting.gif)

### 资产库
有一个用户生成的内容库供您选择。
要查看可用内容，请打开*添加菜单*，然后单击**浏览资产库**。

![features-library.png](/building/features-library.png)

从这里，您可以搜索对象、脚本、家具等！

![features-library2.png](/building/features-library2.png)

如果您想添加到库（它可以是公开或私人的），请编辑特征，然后单击**+ 添加到库**。

![features-library3.png](/building/features-library3.png)

### 热键 - 特征
这些快捷键使得复制、移动或编辑特征变得容易。
按下快捷键，然后单击要使用的特征。

<kbd>R</kbd> - 激活复制特征模式
<kbd>M</kbd> - 激活移动特征模式
<kbd>E</kbd> / **右键单击** - 激活编辑特征模式

![features-hotkeys.gif](/building/features-hotkeys.gif)

## 地块特征菜单

地块特征菜单是您的地块中当前放置的所有特征的列表，默认情况下按接近程度排序。
当您的地块充满特征时，这是一个非常有用的工具！

![parcel-features.gif](/building/parcel-features.gif)

您还可以通过单击特征旁边的复选框并单击下方的按钮来擦除或分组特征。
有关分组特征的更多信息，请转到[这里](/docs/features/group)。

![parcel-features-delete.gif](/building/parcel-features-delete.gif)

您可以通过单击下拉菜单来更改从接近度到ID或类型的排序。
您还可以通过单击*升序*复选框来更改升序或降序排序。

![parcel-features-sort.png](/building/parcel-features-sort.png)

## 地块快照
快照是您的地块的用户选择状态，您可以选择稍后返回。
在进行重大更改或为事件更换地块时，请使用此功能备份（拍摄快照）和恢复（还原）地块。

要拍摄快照，请单击**快照**按钮，然后单击**拍摄快照**。

![snapshot.png](/building/snapshot.png)

要还原到快照，请单击**快照**按钮，然后单击您要的快照上的**还原**。

![parcel-snapshots.gif](/building/parcel-snapshots.gif)

您还可以查看快照列表，并从您的地块页面（例如https://www.cryptovoxels.com/parcels/1）还原到不同的状态。

![parcel-admin.png](/building/parcel-admin.png)

要了解有关地块管理部分和快照的更多信息，请[单击此处](/docs/Parcels/Ownership)。

## 您的NFTs

（在这里添加有关您的NFTs的信息）

## 地块所有权
请前往[这里](/docs/Parcels/Ownership)以了解您可以在您的地块上调整和执行的其他操作。