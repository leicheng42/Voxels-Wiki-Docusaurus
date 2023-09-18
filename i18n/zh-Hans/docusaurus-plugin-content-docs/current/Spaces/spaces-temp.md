# 空间（临时）

## 什么是空间？
空间是脱离网格的免费地块。它们是类似于[地块](/docs/Parcels/Building)的建筑体积，是测试Cryptovoxels建筑工具的绝佳方式。
您还可以将[空间转换为地块，反之亦然](#将空间转换为地块)，使实验变得简单。

![blankspaces.png](/spaces/blankspaces.png)

### 在空间中我可以做什么？
您可以在[地块](/docs/Parcels/Building)中所能做的一切事情，包括[脚本编写](/docs/Scripting/)。多人游戏限制为5人。
:::警告
目前空间中不允许进行[光照图烘焙](/docs/Parcels/light-map)。
:::

### 空间是免费的吗？
是的，空间是100%免费的，您可以拥有最多420个空间。

### 如何创建一个空间？
在Cryptovoxels网站上，点击顶部的[空间](https://www.cryptovoxels.com/account/spaces)。

![spacebutton.png](/spaces/spacebutton.png)

输入名称，调整宽度/高度/深度，然后点击**创建！**。

![myspace.png](/spaces/myspacecreate.png)

现在您将进入您的空间页面。单击**访问**以前往您的空间。

![visitspacesmallest.png](/spaces/visitspacesmallest.png)

恭喜，您进入了您的新空间！单击[此处](/docs/Parcels/Building)了解如何进行建筑。

### 如何查看我的空间？
在Cryptovoxels网站上，点击顶部的[空间](https://www.cryptovoxels.com/account/spaces)。在左侧将显示您的空间列表。
从这里，您可以单击**传送至**以前往空间。

![spaces.png](/spaces/spacessmall.png)

单击空间行，可以获取更多设置。
从这里，您可以查看空间页面，下载JSON文件或擦除空间。

![spacesettings.gif](/spaces/spaceadjustments.gif)
您还可以单击空间名称，以跳转到其页面。

## 空间页面
在空间页面上，您可以更改名称，共享空间并调整设置。
要查看您的空间页面，请转到[此处](https://www.cryptovoxels.com/account/spaces)，然后单击要进入的空间名称。

![spacename.png](/spaces/spacename.png)

### 编辑空间信息
在空间页面上，单击铅笔图标以编辑空间的名称和描述。

![editinfo.png](/spaces/editinfo.png)

### 分享您的空间
您可以与任何人分享您的空间，他们甚至不需要登录即可进入！例如，[这是我们的空间！](https://www.cryptovoxels.com/spaces/c9cc778b-8326-45c6-932d-aae4a8f06c84)

您只需分享您的空间的唯一URL。它应该看起来像：
`https://www.cryptovoxels.com/spaces/c9cc778b-8326-45c6-932d-aae4a8f06c84`

:::警告
空间中的多人游戏限制为5人。
空间也无法进行搜索或浏览。您必须知道空间的URL才能访问它。
:::

#### 更改分享链接（别名）
在您的空间页面上，右侧有一个*空间管理员*部分 - 从那里您可以编辑该空间的别名并保存它。
这将生成一个可共享的链接，使您可以轻松分享您的空间。在URL下方查看预览。

![changeslug.gif](/spaces/changeslug.gif)

### 允许他人进行编辑
与地块一样，您可以将您的空间转换为沙盒，并允许任何拥有链接的人进行编辑。
进行编辑的人需要在Cryptovoxels中登录以进行更改。单击[此处](https://www.cryptovoxels.com/spaces/4707ddd3-fd1b-4ee1-856b-08284f1ecc11/play)查看/编辑我们的沙盒空间。

在您的空间页面下的*空间管理员*下，勾选**是沙盒**以启用沙盒模式。

![spacesandbox.png](/spaces/spacesandbox.png)

:::警告
沙盒非常适合合作创作，但如果您已经完成了空间并将其链接到公共空间，则可能希望关闭沙盒模式，

以免您的作品受到负面影响。
:::

### 使用建筑模板
您可以使用建筑模板开始。

在您的空间页面上，单击**建筑...**，然后选择一个建筑材料和一个模板。

![spacebuild.png](/spaces/spacebuild.png)

### 备份您的空间
空间不会像地块一样自动拍摄快照，因此您必须手动备份您的空间。
幸运的是，备份很简单，只涉及保存一个JSON文件，而且有两种方法可以做到这一点。

#### 方法1
您可以在空间页面上备份空间。在右侧的*空间管理员*部分中，单击**将内容另存为JSON**。
将您的JSON文件保存在安全位置。

![spacebackup1.png](/spaces/spacebackupa.png)

#### 方法2
您也可以从您的[空间列表页面](https://www.cryptovoxels.com/account/spaces)中备份。
单击要保存的空间，然后单击**下载Json**。

![spacebackupb.png](/spaces/spacebackupb.png)

### 恢复您的空间
在空间页面上，您可以上传备份的JSON文件。
在右侧的*空间管理员*部分中，单击**上传JSON**，然后选择文件。

![spacerestore.png](/spaces/spacerestore.png)

您也可以创建一个新空间[此处](https://www.cryptovoxels.com/account/spaces)，然后在上传JSON文件后，只需确保尺寸相同即可。

## 将空间转换为地块
只要高度、宽度和深度相同，您就可以方便地将空间转换为地块。

这对于进行实验、在秘密中进行下一个地块迭代的工作或者尚未拥有地块但计划将来拥有一个地块的情况非常有用。

:::警告
超出地块特性边界的功能将被删除。
导入的地块/空间应与现实世界地块的大小相同。
功能必须具有有效的类型和有效的数据。
:::

#### 方法1
在您地块的页面上（例如 cryptovoxels.com/parcels/4661），在*地块管理员*下，单击**查看/编辑地块内容**。

![spacetoparcel1.png](/spaces/spacetoparcel1.png)

在*地块版本管理*页面上，单击要使用的空间上的**导入**。

![spacetoparcel2b.png](/spaces/spacetoparcel2b.png)

单击**确定**，享受不同的地块！

![spacetoparcel4.png](/spaces/spacetoparcel4.png)

#### 方法2
在您的空间页面上（例如 [cryptovoxels.com/spaces/89ba33af](https://www.cryptovoxels.com/spaces/c9cc778b-8326-45c6-932d-aae4a8f06c84)），在*空间管理员*下，单击**将内容另存为JSON**。
（您也可以从[这里](https://www.cryptovoxels.com/account/spaces)的空间列表页面保存空间的JSON。）

![spacebackup1.png](/spaces/spacebackupa.png)

获得空间的JSON后，转到您地块的页面，在*地块管理员*下，单击**查看/编辑地块内容**。

![spacetoparcel1.png](/spaces/spacetoparcel1.png)

单击*导入*下的**选择文件**，并选择空间的JSON文件，就是这样！

![spacetoparcel3.png](/spaces/spacetoparcel3.png)

## 将地块转换为空间
您可以顺利地将地块转换为空间。

#### 方法1
在您地块的页面上（例如 cryptovoxels.com/parcels/1），在*地块管理员*下，单击**查看/编辑地块内容**。

![spacetoparcel1.png](/spaces/spacetoparcel1.png)

在*地块版本*下，单击要转换的版本上的**创建空间**（按最新排序）。

![spacetoparcel5.png](/spaces/parceltospace1.png)

现在您应该会看到一个以*副本 X of parcel X*命名的空间页面。

#### 方法2
在您地块的页面上，单击**查看/编辑地块内容**。

![spacetoparcel1.png](/spaces/spacetoparcel1.png)

在*地块版本*下，单击要转换的版本上的**下载**，并保存JSON。

![spacetoparcel5.png](/spaces/parceltospace2.png)

进入您空间的页面，单击*空间管理员*下的**上传JSON**，并选择JSON文件。

![parceltospace3.png](/spaces/parceltospace3b.png)

享受您的空间！

## 空间示例
以下是一些您可以使用空间做的很棒的示例。

[ZeroPointer的太阳能](https://www.cryptov

oxels.com/spaces/5f439817-8122-4dbf-8330-913e84600d74)

[uttermelon的万圣节派对](https://www.cryptovoxels.com/spaces/dfee9c8d-6256-469f-896b-8a76ab1be45c)

[CV地下世界](https://www.cryptovoxels.com/spaces/c547f9c7-fa28-4a4e-8cec-4076ded9468a)

[uttermelon为Mr misang制作的粉丝艺术](https://www.cryptovoxels.com/spaces/4d8a4b9b-19e6-408c-b03f-f87567067adc)

[airbag的游戏](https://www.cryptovoxels.com/spaces/d0a82c2b-e9cd-4c24-93a5-a9d106b4cdfe)

[uttermelon的DEEKAYverse_made](https://www.cryptovoxels.com/spaces/483aa303-bdce-4f98-8a73-5d63e7048098)

[sorryaboutyourcats为imnotArt制作的分形图案](https://www.cryptovoxels.com/spaces/e82c3962-f2e8--4ca1-a30d-703f5f69cdc5)

如果您初次使用Cryptovoxels并想创建一个空间，[此指南](https://medium.com/p/759947c7c546)可以帮到您。

玩得开心！