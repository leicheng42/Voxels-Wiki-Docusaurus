# 空间
孤立的地块

## 什么是空间？
空间是离网格的免费土地。它们是类似于[地块](/docs/Parcels/Building)的建筑体积，是测试Cryptovoxels建筑工具的绝佳方式。
您还可以[将空间转换为地块，反之亦然](#将空间转换为地块)，以便轻松进行实验。

![blankspaces.png](/spaces/blankspaces.png)

### 我可以在空间中做什么？
您可以在[地块](/docs/Parcels/Building)中可以做的一切，包括[脚本编写](/docs/Scripting/)。多人游戏限制为5人。
:::警告
尚不允许在空间中进行[光照图烘焙](/docs/Parcels/light-map)。
:::

### 空间是免费的吗？
是的，空间是100%免费的，您可以拥有多达420个空间。

### 我如何创建一个空间？
在Cryptovoxels网站上，点击顶部的[Spaces](https://www.cryptovoxels.com/account/spaces)。

![spacebutton.png](/spaces/spacebutton.png)

输入名称并根据您的喜好调整宽度/高度/深度，然后点击**创建！**。

![myspace.png](/spaces/myspacecreate.png)

现在您将进入您的空间页面。单击**访问**以进入您的空间。

![visitspacesmallest.png](/spaces/visitspacesmallest.png)

恭喜，您已进入您的新空间！单击[此处](/docs/Parcels/Building)以了解如何进行建设。

### 如何查看我的空间？
在Cryptovoxels网站上，点击顶部的[Spaces](https://www.cryptovoxels.com/account/spaces)。在左侧，将显示您的空间列表。
从这里，您可以单击**传送到**并前往空间。

![spaces.png](/spaces/spacessmall.png)

您可以通过单击空间行来获取更多设置。
从这里，您可以查看空间页面、下载JSON或删除空间。

![spacesettings.gif](/spaces/spaceadjustments.gif)
您还可以只需单击空间的名称，即可进入其页面。

## 空间页面
在空间页面上，您可以更改名称、共享空间并调整设置。
要查看您的空间页面，[点击这里](https://www.cryptovoxels.com/account/spaces)，然后单击要进入的空间的名称。

![spacename.png](/spaces/spacename.png)

### 编辑空间信息
在空间页面上，单击笔图标以编辑空间的名称和描述。

![editinfo.png](/spaces/editinfo.png)

### 分享您的空间
您可以与任何人分享您的空间，而且他们甚至不需要登录即可进入！例如，[这是我们的空间的链接！](https://www.cryptovoxels.com/spaces/c9cc778b-8326-45c6-932d-aae4a8f06c84)

您只需分享空间的唯一URL。它应该看起来像：
`https://www.cryptovoxels.com/spaces/c9cc778b-8326-45c6-932d-aae4a8f06c84`

:::警告
每个空间的多人游戏限制为5人。
空间也无法进行搜索或浏览。您必须知道空间的URL才能访问它。
:::

#### 更改您的共享链接（别名）
在您的空间页面上，右侧有一个*Space admin*部分 - 从那里，您可以编辑该空间的别名并保存。 
这将生成一个可共享的链接，使您能够轻松分享您的空间。在URL下方看到预览。

![changeslug.gif](/spaces/changeslug.gif)

### 允许其他人编辑
与地块一样，您可以将您的空间转换为沙盒，并使任何拥有链接的人都可以编辑。
进行编辑的人需要登录到Cryptovoxels才能进行更改。点击[这里](https://www.cryptovoxels.com/spaces/4707ddd3-fd1b-4ee1-856b-08284f1ecc11/play)查看/编辑我们的沙盒空间。

在空间页面上的*Space admin*下，勾选**是沙盒**以启用沙盒模式。

![spacesandbox.png](/spaces/spacesandbox.png)

:::警告
沙盒非常适合协作创作，但如果您已经完成了空间并将其链接给公众，您可能希望关闭沙盒模式，以防止您的创作受到负面影响。
:::

### 使用构建模板
您可以使用构建模板来开始。
在您的空间页面上，单击**建造...**，然后选择一个建筑材料和一个模板。

![spacebuild.png](/spaces/spacebuild.png)

### 备份您的空间
空间不像地块那样自动拍摄快照，因此您需要手动备份您的空间。
幸运的是，备份非常简单，只涉及保存一个JSON文件，有两种方法可以做到这一点。

#### 方法1
您可以在空间页面上备份空间。在右侧的*Space admin*部分中，单击**将内容下载为JSON**。
将您的JSON文件保存在安全的位置。

![spacebackup1.png](/spaces/spacebackupa.png)

#### 方法2
您还可以从您的[空间列表页面](https://www.cryptovoxels.com/account/spaces)备份。
单击要保存的空间，然后单击**下载Json**。

![spacebackupb.png](/spaces/space

backupb.png)

### 恢复您的空间
在空间页面上，您可以上传备份的JSON文件。
在右侧的*Space admin*部分下，单击**上传JSON**，然后选择文件。

![spacerestore.png](/spaces/spacerestore.png)

您还可以创建一个新的空间[在此处](https://www.cryptovoxels.com/account/spaces)上传JSON文件，只需确保尺寸相同。

## 将空间转换为地块
只要高度、宽度和深度相同，您就可以方便地将空间转换为地块。

这非常适合进行实验，或者如果您希望在秘密地工作的下一个地块迭代上保持地块完整，或者如果您尚未拥有地块，但计划将来获得地块。

:::警告
地块特征超出地块特征边界的部分将被删除。
导入的地块/空间必须与虚拟世界地块的尺寸相同。
特征必须具有有效的类型和有效的数据。
:::

#### 方法1
在您的地块页面（例如cryptovoxels.com/parcels/4661）上，在*地块管理员*下，单击**查看/编辑地块内容**。

![spacetoparcel1.png](/spaces/spacetoparcel1.png)

在*地块版本管理*页面上，单击要使用的空间上的**导入**。

![spacetoparcel2b.png](/spaces/spacetoparcel2b.png)

单击**确定**，享受不同的地块！

![spacetoparcel4.png](/spaces/spacetoparcel4.png)

#### 方法2
在您的空间页面（例如[cryptovoxels.com/spaces/89ba33af](https://www.cryptovoxels.com/spaces/c9cc778b-8326-45c6-932d-aae4a8f06c84)）上，在*空间管理员*下，单击**将内容下载为JSON**。
（您还可以从[这里](https://www.cryptovoxels.com/account/spaces)的空间列表页面保存空间的JSON。）

![spacebackup1.png](/spaces/spacebackupa.png)

获取空间的JSON后，转到您的地块页面，然后在*地块管理员*下，单击**选择文件**，然后选择空间的JSON文件，就这样！

![spacetoparcel3.png](/spaces/spacetoparcel3.png)

享受您的空间！

## 将地块转换为空间
您可以无缝地将地块转换为空间。

#### 方法1
在您的地块页面（例如cryptovoxels.com/parcels/1）上，在*地块管理员*下，单击**查看/编辑地块内容**。

![spacetoparcel1.png](/spaces/spacetoparcel1.png)

在*地块版本*下，单击要转换的版本上的**创建空间**（按最新的排序在顶部）。

![spacetoparcel5.png](/spaces/parceltospace1.png)

现在您应该看到您的空间页面，标题类似于*X的副本，地块X*。

#### 方法2
在您的地块页面上，在*地块管理员*下，单击**查看/编辑地块内容**。

![spacetoparcel1.png](/spaces/spacetoparcel1.png)

在*地块版本*下，单击要转换的版本上的**下载**并保存JSON。

![spacetoparcel5.png](/spaces/parceltospace2.png)

进入您的空间页面，然后在*空间管理员*下，单击**上传JSON**，然后选择JSON文件。

![parceltospace3.png](/spaces/parceltospace3b.png)

享受您的空间！

## 空间示例
以下是使用空间可以做的一些很好的示例。

[ZeroPointer的Solar](https://www.cryptovoxels.com/spaces/5f439817-8122-4dbf-8330-913e84600d74)

[uttermelon的万圣节派对](https://www.cryptovoxels.com/spaces/dfee9c8d-6256-469f-896b-8a76ab1be45c)

[CV地下世界](https://www.cryptovoxels.com/spaces/c547f9c7-fa28-4a4e-8cec-4076ded9468a)

[uttermelon为Mr misang制作的粉丝艺术](https://www.cryptovoxels.com/spaces/4d8a4b9b-19e6-408

c-b03f-f87567067adc)

[airbag的游戏](https://www.cryptovoxels.com/spaces/d0a82c2b-e9cd-4c24-93a5-a9d106b4cdfe)

[uttermelon的DEEKAYverse_made](https://www.cryptovoxels.com/spaces/483aa303-bdce-4f98-8a73-5d63e7048098)

[sorryaboutyourcats为imnotArt制作的分形](https://www.cryptovoxels.com/spaces/e82c3962-f2e8-4ca1-a30d-703f5f69cdc5)

如果您是第一次开始使用Cryptovoxels并想创建一个空间，[这个指南](https://medium.com/p/759947c7c546)可以帮助您。

玩得开心，创作愉快！