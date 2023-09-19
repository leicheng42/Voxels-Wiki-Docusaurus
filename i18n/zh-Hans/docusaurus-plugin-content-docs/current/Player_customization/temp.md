# 制作可穿戴物品（临时）

## 1. 需求
可穿戴物品位于[集合](/docs/Player_customization/temp#h-3-collections)中，要创建集合，您需要拥有[分区](/docs/Parcels/Buy-a-parcel)。
如果您没有拥有分区，您可以选择[提交到公共集合](/docs/Player_customization/temp#submit-to-a-public-collection)，或者请求拥有分区的人为您创建一个集合。
:::caution
您只允许在每个拥有的分区上创建一个集合。
:::

您还需要Matic或ETH（根据集合的不同）来完成每笔交易。
最后，请注意可穿戴物品有社区准则，它们不能包含冒犯性、种族歧视、鼓吹暴力或不适宜的内容。

## 2. 创建 Vox 模型
### 使用 MagicaVoxel
要创建 Vox 模型，您需要[MagicaVoxel](https://ephtracy.github.io/)。下载最新版本，安装它，然后打开它。

第一步是将大小设置为32x32x32 - 您可以通过在右上角选择40s，输入32并按回车键来完成此操作。

![magica_size.png](/createawearable/magica_size.png)

现在，您可以使用 MagicaVoxel 创建自己的帽子、滑雪板、T恤等物品。

:::info
在制作物品时，大小和旋转并不是很重要，因为所有者可以在需要穿戴时重新调整可穿戴物品的大小和旋转 - [单击此处查看用户如何穿戴和自定义可穿戴物品](/docs/Player_customization/Costume_tab)。
:::

### 保存您的 Vox

完成制作可穿戴物品后，请保存它。

![magica_save.png](/createawearable/magica_save.png)

确保画布是32x32x32！

### 上传您的可穿戴物品
您的物品已经创建好，现在是上传并审查的时候了！

**您有两个选择：**
1. [将您的可穿戴物品铸造到您的集合中](/docs/Player_customization/temp#minting-a-wearable)（您需要[创建一个集合](/docs/Player_customization/temp#creating-a-collection)首先）
1. [将您的可穿戴物品提交到公共集合](/docs/Player_customization/temp#submit-to-a-public-collection)

选择选项2而不是选项1的优势在于，您可以让其他人管理集合，而该人必须支付铸造费用。
但是，集合所有者也有资格获得OpenSea交易的版税费用。

### 提示、脚本和教程
MagicaVoxel 允许使用脚本（着色器），具有导入某些文件类型的能力以简化创建过程，并且可以加载调色板，以及轻松创建渐变色。

#### 导入
要导入 PNG 或 JPG，只需将其拖放到 MagicaVoxel 中（但首先要清除它）。例如，您可以导入像素艺术面部，然后根据您的喜好拉伸它。如果您选择这种方式，您可能需要先将其缩小到32x32（如果您在Photoshop中这样做，请确保使用最近邻居作为重采样类型）。

![magica_import_png.gif](/createawearable/magica_import_png.gif)

要导入 OBJ，请将其拖放到 MagicaVoxel 中。在导入文件时，MagicaVoxel 可能会包含一个隐藏的图层，您需要将其删除 - 否则您将无法将您的 Vox 导入到 Cryptovoxels 中。查看下面的GIF以了解如何擦除。

![magica_import_obj.gif](/createawearable/m

agica_import_obj.gif)

#### 着色器和颜色
着色器放入着色器文件夹，调色板放入调色板文件夹。加载了一些着色器后，可以通过右侧面板或底部的控制台访问它们。[此网站](https://mode-vis.gumroad.com/?sort=newest) 提供了许多不同的着色器供您使用。

![magica_shaders.png](/createawearable/magica_shaders.png)

要创建渐变，按住CTRL+ALT，然后单击/按住起始颜色并将其拖动到结束颜色。

![magica_gradient.gif](/createawearable/magica_gradient.gif)

#### 尝试
尽管没有官方功能可以在铸造前先尝试可穿戴物品，但您可以将 Vox 放置在您的分区中（或沙盒分区），然后走进去以模拟它。

将 Vox 放入并调整位置/比例/旋转后，按C键切换到第三人称视图，然后走进去。这并不是完美的，但它有效。

![trying_it.gif](/createawearable/trying_it.gif)

查看[自定义](/docs/Player_customization/Costume_tab)部分，了解玩家如何将可穿戴物品附加到自己身上的所有方法。

#### 教程
如果您对MagicaVoxel完全不熟悉，或者想要更深入了解，可以查看这些资源：

- [初学者书面指南](https://www.raywenderlich.com/375-magicavoxel-3d-art-tutorial)
- [快速入门视频](https://www.youtube.com/watch?v=J5fK79E_RXE)（图标来自旧版本）
- [详细视频](https://www.youtube.com/watch?v=uKOBIHSgIwI)（忽略渲染部分）
- [官方资源](https://ephtracy.github.io/index.html?page=mv_resource)（很多好东西）

## 3. 集合
一个集合是一组可以在虚拟世界中生成或穿戴的3D NFT。

在Cryptovoxels中创建并加入白名单的集合意味着您可以基于区块链创建自己的品牌收藏品（在本例中是可穿戴物品）。

玩家可以在虚拟世界中佩戴或放置该集合的收藏品。他们还可以在Cryptovoxels网站和OpenSea上找到您的集合和收藏品。您还可以从Cryptovoxels和OpenSea管理您的集合的各个方面。
:::caution
您只允许在拥有的分区上创建一个集合。如果您不拥有分区，您将需要提交到公共集合。
拥有的分区的大小不决定您可以在集合中拥有多少可穿戴物品。
:::

### 创建集合
1. 转到 https://www.cryptovoxels.com/collections
1. 登录到Cryptovoxels和您的钱包
1. 单击 **制作您自己的集合！**
1. 单击 **创建集合**

![create_collection.png](/createawearable/create_collection.png)

5. 单击 **创建集合** 按钮

![create_eligibility.png](/createawearable/create_eligibility.png)

6. 选择 **Chain Id** 并单击 **下一步** 按钮

![select_a_chain.png](/createawearable/select_a_chain.png)

7. 您的钱包可能会要求您切换网络，因此单击 **切换网络**（如果您看不到此消息，请忽略）

![switch_network.png](/createawearable/switch_network.png)

8. 填写集合的信息，单击 **保存和下一步** 按钮（您可以随时通过 **⚙Admin** 页修改名称、描述和徽标）

![collection_info2.png](/createawearable/collection_info2.png)

9. 命名合同，选中 **I assert…** 复选框，然后单击 **上传并部署** 按钮以继续

10. 您需要在Matic主网上拥有Matic（或在Ethereum主网上拥有ETH）才能继续进行下一步，因此一旦您有可用的Matic，请单击 **确认**

![confirm_transaction.png](/createawearable/confirm_transaction.png)

11. 成功部署后，将弹出一个确认窗口

![deployed_contract.png](/createawearable/deployed_contract.png)

12. 填写缺少的信息

![collection_info.png](/createawearable/collection_info.png)

13. 在添加所需信息后，单击复选框，然后单击 **提交** 按钮

14. 所有文本应该已清除，并出现了一个带有绿色背景的消息 - 单击其中陈述 **单击此处查看！** 的链接

15. 现在您应该可以看到您的集合 - 单击 **⚙Admin** 按钮并将该页面加为书签

![admin.png](/createawearable/admin.png)

恭喜 - 您现在拥有一个集合！

### 铸造可穿戴物品
现在您已准备好铸造了！前往您的集合页面并确保您已登录（它将类似于https://www.cryptovoxels.com/collections/1#）。
如果您要提交到公共集合，请跳过下一部分。

#### 上传到您的集合
![mint.png](/createawearable/mint.png)

1. 单击 **🏭铸造** 按钮。
1. 输入 **名称** 和 **描述**（不要触摸所有者信息）
1. 设置 **发行量**
*稀有度：1-9 传说 | 10-

99 史诗 | 100-999 稀有 | ≥1000 普通*
1. 单击 **选择文件** 按钮，然后选择您的vox文件
1. 单击同意TOS的复选框
1. 单击 **提交** 按钮
1. 滚动下来，您的提交将在 *收藏品提交* 下 - 如果看不到，请单击 **刷新** 按钮
1. 检查您的预览是否显示为动画gif

![gif_before.png](/createawearable/gif_before.png)

9. 如果看起来破损，点击操作下的 **刷新gif** 按钮。然后您将看到此窗口打开：

![gif_refresh.png](/createawearable/gif_refresh.png)

10. 如果收到 **ok**，刷新浏览器，然后再次单击 **🏭铸造** 并向下滚动以查看提交

![gif_fixed.png](/createawearable/gif_fixed.png)

11. 如果一切看起来正常，请单击 **铸造**。如果出现异常情况，请单击 **拒绝**。

12. 如果铸造，您的钱包将弹出以确认交易，这将需要极小数量的Matic（或ETH） - 单击确认以继续铸造。

![token_id.png](/createawearable/token_id.png)

13. 在 *收藏品提交* 下，将有一个右侧的链接，其中写着 **收藏品准备就绪** - 单击该链接

![collectible_ready.png](/createawearable/collectible_ready.png)

14. 现在您应该在Cryptovoxels页面上看到您的可穿戴物品

![mint_success.png](/createawearable/mint_success.png)

恭喜，您刚刚铸造了您的第一个可穿戴物品！

#### 提交到公共集合
如果您不拥有分区，您可以随时提交到公共集合。

1. 前往 https://www.cryptovoxels.com/collections
1. 单击 **向公众开放** 复选框
1. 选择一个集合
1. 单击 **🏭提交** 按钮

![public_collection.png](/createawearable/public_collection.png)

5. 阅读警告，填写信息并单击底部的复选框，然后单击 **提交** 按钮
6. 您现在必须等待集合所有者批准它 - 您可能需要通过Cryptovoxels / Discord给他们发送消息
7. 一旦集合所有者铸造了可穿戴物品，您将在Cryptovoxels上收到一条消息（如果您收到它，您会在顶部看到 **收件箱** 旁边的红点）

### 交易可穿戴物品
您可以在Cryptovoxels网站上或在OpenSea上转让可穿戴物品。

#### 在Cryptovoxels上交易
要使用Cryptovoxels网站进行转让，请前往您要发送的可穿戴物品页面（例如https://www.cryptovoxels.com/collections/1/1），然后单击底部的 **转让** 按钮。如果看不到 **转让** 按钮，要么表示您需要在钱包上切换网络，要么表示您不拥有该可穿戴物品的任何数量。

![transfer_wearable.png](/createawearable/transfer_wearable.png)

一个对话框将弹出，询问要转让给谁以及数量。填写并单击转让按钮。

![transfer_to_who.png](/createawearable/transfer_to_who.png)

然后会要求确认地址 - 如果看起来正确，请单击 **确定** 按钮。您的钱包将弹出，要求确认交易（Matic或ETH燃气费），单击 **确认** 按钮以继续。对话框将显示转账过程，然后关闭。

#### 在OpenSea上交易
如果您希望通过OpenSea发送它，也可以这样做。前往OpenSea上的可

穿戴物品页面，然后单击 **列表** 按钮。

![opensea_list.png](/createawearable/opensea_list.png)

您将被重定向到OpenSea的创建页面。如果您没有帐户，请创建一个。然后按照说明填写信息。

在 **属性** 部分，确保您输入 **Cryptovoxels地址** 和 **Parcel ID**（它们将在您购买时提供）。

![opensea_attributes.png](/createawearable/opensea_attributes.png)

完成后，您可以单击 **下一步** 并继续创建上架。

![opensea_create_listing.png](/createawearable/opensea_create_listing.png)

一旦您的可穿戴物品在OpenSea上架，其他用户可以在那里找到它并购买。记住，OpenSea上的交易需要燃气费用（ETH）。

### 管理集合
您可以通过单击 **⚙Admin** 页面上的链接来管理您的集合。从那里，您可以：

- 更改集合名称、描述和徽标
- 管理集合中的所有可穿戴物品
- 拒绝或批准公共集合提交
- 更改铸造费用
- 查看集合中的所有者

![admin.png](/createawearable/admin.png)

请确保您了解每个选项的含义，以便能够管理您的集合。

### 更新可穿戴物品
您可以更新可穿戴物品的元数据，但不可以更新其Vox文件。如果要更新Vox文件，您需要铸造一个新的版本。

要更新可穿戴物品的元数据，请按照以下步骤操作：

1. 前往您的集合页面（https://www.cryptovoxels.com/collections/your_collection_id）
2. 单击要更新的可穿戴物品
3. 在可穿戴物品页面上，单击 **⚙Admin** 按钮

![admin_wearable.png](/createawearable/admin_wearable.png)

4. 在元数据编辑器中，对需要更新的字段进行更改
5. 单击 **提交** 按钮以保存更改
6. 您的钱包将弹出以确认元数据更新交易，确认后即可更新元数据

### 收藏品批准
如果您已经为其他人的集合提交了可穿戴物品，并且集合所有者批准了它们，您将在Cryptovoxels上接收到一条消息，通知您可穿戴物品已经批准。

在此消息中，您将找到一个链接，可以点击查看已批准的可穿戴物品。

![wearable_approved.png](/createawearable/wearable_approved.png)

通过单击该链接，您将被重定向到可穿戴物品的详情页面。

![wearable_details.png](/createawearable/wearable_details.png)

您可以从这里查看可穿戴物品的详情以及它们所属的集合。如果您拥有该可穿戴物品，您还可以通过单击底部的 **装备** 按钮来佩戴它。

这就是制作、铸造、交易和管理可穿戴物品的基础知识。希望这些信息对您有所帮助，祝您在Cryptovoxels的创作和交易中取得成功！如果您需要进一步的帮助或有其他问题，请随时提问。