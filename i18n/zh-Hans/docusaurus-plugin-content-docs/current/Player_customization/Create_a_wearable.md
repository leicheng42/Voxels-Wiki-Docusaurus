# 制作可穿戴物品

## 1. 要求
可穿戴物品存储在[收藏品](/docs/Player_customization/Create_a_wearable#h-3-collections)中，要创建一个收藏品，您需要拥有一个[地块](/docs/Parcels/Buy-a-parcel)。
如果您没有拥有地块，您可以选择要么[提交到公共收藏品](/docs/Player_customization/Create_a_wearable#submit-to-a-public-collection)，要么请求一个已拥有地块的人为您创建一个收藏品。
:::caution
您只允许在每个拥有的地块上创建一个收藏品。
:::

您还需要Matic或ETH（取决于收藏品）以进行每笔交易。
最后，可穿戴物品还需要遵循社区准则 - 不能包含冒犯性的种族主义、歧视性、鼓吹暴力或不适宜工作场所的内容。

## 2. 制作 Vox 模型
### 使用 MagicaVoxel
要创建 Vox 模型，您需要[MagicaVoxel](https://ephtracy.github.io/)。下载最新版本，安装它，然后打开。

第一步是将大小设置为 32x32x32 - 您可以通过在右上角选择 40s，然后输入 32 并按回车键来实现这一点。

![magica_size.png](/createawearable/magica_size.png)

现在您已经准备好使用 MagicaVoxel 来创建您自己的帽子、滑雪板、T 恤等等。

:::info
在制作物品时，大小和旋转并不是很重要，因为所有者可以在穿戴时随时调整可穿戴物品的大小和旋转 - [单击此处查看用户如何穿戴和自定义他们的可穿戴物品](/docs/Player_customization/Costume_tab)。
:::

### 保存您的 Vox

制作完可穿戴物品后，请将其保存。

![magica_save.png](/createawearable/magica_save.png)

确保画布尺寸为 32x32x32！

### 上传您的可穿戴物品
您的物品已创建，现在是时候将其上传以进行审核了！

**您有两个选择：**
1. [将您的可穿戴物品铸造到您的收藏品中](/docs/Player_customization/Create_a_wearable#minting-a-wearable)（您需要[创建一个收藏品](/docs/Player_customization/Create_a_wearable#creating-a-collection)首先）
2. [将您的可穿戴物品提交到公共收藏品](/docs/Player_customization/Create_a_wearable#submit-to-a-public-collection)

选择第二个选项而不是第一个的好处是，您可以让其他人管理收藏品，并且该人必须支付铸造费用。
然而，收藏品所有者也有资格从 OpenSea 交易中获得版税费用。

### 提示、脚本和教程
MagicaVoxel 允许使用脚本（着色器），具有导入某些文件类型以简化创建过程的功能，并且可以加载调色板，以及轻松创建渐变效果。

#### 导入
要导入 PNG 或 JPG，只需将其拖放到 MagicaVoxel 中（但在此之前请清除它）。例如，您可以导入一个像素艺术的脸部，然后将其挤出到您喜欢的样子。如果您选择这条路径，您可能需要事先将其缩小到 32x32（如果在 Photoshop 中进行操作，请确保使用最近邻法作为重新采样类型）。

![magica_import_png.gif](/createawearable/magica_import_png.gif)

要导入 OBJ，请将其拖放到 MagicaVoxel 中。当您导入文件时，MagicaVoxel 可能会包括一个隐藏层，您将不得不将其擦除 - 否则您将无法将 vox 导入到 Cryptovoxels 中。查看下面的 GIF 以了解如何擦除。

![magica_import_obj.gif](/createawearable/magica_import_obj.gif)

#### 着色器和颜色
着色器放置在着色器文件夹中，调色板放置在调色板文件夹中。在加载了一些着色器之后，它们可以通过右侧面板或底部的控制台访问。 [此站点](https://mode-vis.gumroad.com/?sort=newest) 提供了许多不同的着色器供您玩耍。

![magica_shaders.png](/createawearable

/magica_shaders.png)

为了创建渐变效果，请按住 CTRL+ALT，然后单击/按住起始颜色并将其拖动到结束颜色。

![magica_gradient.gif](/createawearable/magica_gradient.gif)

#### 在铸造前试穿
尽管在铸造前没有正式的试穿功能，但您可以将 vox 放置在您的地块（或一个沙盒地块）中，然后走进去以在某种程度上模拟它。

在放置 vox 并调整位置/缩放/旋转之后，按C键进入第三人称视角，然后走进去。这不是完美的，但它有效。

![trying_it.gif](/createawearable/trying_it.gif)

查看[定制](/docs/Player_customization/Costume_tab)部分以了解玩家可以如何在自己身上穿戴可穿戴物品的所有方式。

#### 让他人试穿
如果您已经将可穿戴物品铸造并放在了您的钱包中，您可以允许其他人在购买之前试穿它。

1. 按下*TAB*键或单击右上方附近的方块
1. 选择**Collectible Model**并将其放置在您的地块上
1. 选择**Your Collectibles**下的可穿戴物品
1. 选中**Allow parcel visitors to try on collectible**复选框
1. 选择**Bone**
1. 调整**position** / **rotation** / **scale**
1. 测试以确保您看起来很好

![trying_it2.gif](/createawearable/trying_it2.gif)

#### 故障的脸部
[Stella](https://www.cryptovoxels.com/avatar/0xf1182c5e5bcd7c90b04eb14eb4f971c52f510d47) 发现了一种在 Cryptovoxels 中制作出色的故障可穿戴物品的方法。😸
![glitchedface.gif](/createawearable/glitchedface.gif)
要复制这种疯狂的效果，请参阅[此处的教程](https://www.youtube.com/watch?v=Frn3JCyWHY4)！

#### 扁平可穿戴物品
如果您打算制作一个扁平或薄的可穿戴物品，您将不得不在 MagicaVoxel 中以特定方式创建它，否则缩放可能会出现问题。在下面，您可以看到三个看似相似的 VOX，但在缩放时，其中一个显然是不对称的（并会随之移动）。

![flat3.gif](/createawearable/flat3.gif)

为了确保您的扁平可穿戴物品在缩放时看起来不会出现问题，请将其制作在“地面”上，或将其放在中心点（y：15）如下所示。

![flat.png](/createawearable/flat.png)

#### 教程
如果您对 MagicaVoxel 完全陌生，或者只是想深入了解，可以查看以下资源：

- [初学者的书面指南](https://www.raywenderlich.com/375-magicavoxel-3d-art-tutorial)
- [快速入门视频](https://www.youtube.com/watch?v=J5fK79E_RXE)（图标来自旧版本）
- [详细视频](https://www.youtube.com/watch?v=uKOBIHSgIwI)（忽略渲染部分）
- [官方资源](https://ephtracy.github.io/index.html?page=mv_resource)（许多好东西）

## 3. 收藏品
一个收藏品是一组可以在世界中产生或穿戴的 3D NFT。

创建并在 Cryptovoxels 中列入白名单的收藏品意味着您可以基于区块链创建自己的收藏品品牌（在本例中为可穿戴物品）。

您可以让玩家穿戴或在世界中放置该收藏品的收藏品。他们还将能够在 Cryptovoxels 网站和 OpenSea 上找到您的收藏品和收藏品。您还将能够从 Cryptovoxels 和 OpenSea 管理您收藏品的各个方面。
:::caution
您只允许在每个拥有的地块上创建一个收藏品。如果您没有拥有地块，您将必须提交到公共收藏品。
拥有的地块的大小不决定您可以在一个收藏品中拥有多少可穿戴物品。
:::

### 创建一个收藏品
1. 使用您的钱包登录 CV 并单击顶部栏上的[市场](https://www.cryptovoxels.com/marketplace)
2. 单击[收藏品](https://www.cryptovoxels.com/collections)
3. 单击**Make your own!**
4. 单击**Create a collection**

![create_collection.png](/createawearable/create_collection.png)

5. 单击**Create a collection**按钮

![create_eligibility.png](/createawearable/create_eligibility.png)

6. 选择**Chain Id**并单击**Next**按钮

![select_a_chain.png](/createawearable/select_a_chain.png)

7. 您的钱包可能会要求您切换网络，因此单击**Switch network**（如果您看不到此消息，请忽略）

![switch_network.png](/createawearable/switch_network.png)

8. 填写收藏品的信息，单击**Save & Next**按钮（您可以随时通过**⚙Admin**页面修改名称、描述和徽标）

![collection_info2.png](/createawearable/collection_info2.png)

9. 命名合同，单击**I assert…**复选框，然后单击**Upload And Deploy**按钮以继

续

10. 您将需要在 Matic 主网上拥有 Matic（或在以太坊主网上拥有 ETH）才能继续下一步，因此一旦您有了一些可用的资金，请单击**Confirm**

![confirm_transaction.png](/createawearable/confirm_transaction.png)

11. 在成功部署后，将弹出一个确认窗口

![deployed_contract.png](/createawearable/deployed_contract.png)

12. 填写缺失的信息

![collection_info.png](/createawearable/collection_info.png)

13. 在添加所需信息后，单击复选框，然后单击**Submit**按钮

14. 所有的文本都应该清除，出现了一个带有绿色背景的消息 - 单击上面写着**Click here to see it!**的链接

15. 您现在应该能够看到您的收藏品 - 单击**⚙Admin**按钮并将该页面加入书签

![admin.png](/createawearable/admin.png)

恭喜 - 您现在拥有了一个收藏品！

:::info
您所有的收藏品（和收藏品）都可以在[此处](https://www.cryptovoxels.com/account/collectibles)找到。
:::

### 铸造一个可穿戴物品
现在您已经准备好铸造了！转到您的收藏品页面并确保已登录（URL 类似于 https://www.cryptovoxels.com/collections/1）。如果您要提交到公共收藏品，请跳过下一节。

:::caution
打算铸造鞋子或需要用户拥有两只的东西吗？请记住，**用户将需要拥有两个您的可穿戴物品**（这意味着您可能需要铸造双倍数量）。这个变化是在 2021 年 11 月左右进行的。
:::

#### Polygon/Matic RPC
为了确保稳定性，我们建议将您的钱包的 Polygon/Matic RPC 切换到 https://rpc-mainnet.maticvigil.com/。

![rpc.png](/createawearable/rpc.png)

#### 上传到您的收藏品
![mint.png](/createawearable/mint.png)

1. 单击**🏭Mint**按钮。
2. 输入**Name**和**Description**（不要触摸 Owner 信息）
3. 设置**Issues**的数量
*稀有度：1–9 传奇 | 10–99 史诗 | 100–999 稀有 | ≥1000 普通*
4. 单击**Choose File**按钮并选择您的 vox 文件
5. 单击同意 TOS 的复选框
6. 单击**Submit**按钮
7. 向下滚动，您的提交将显示在*Collectible submissions*下 - 如果您没有看到，请单击**Refresh**按钮
8. 检查您的预览是否显示为动画 gif

![gif_before.png](/createawearable/gif_before.png)

9. 如果看起来破碎，请单击操作下的**Refresh gif**按钮。然后会看到此窗口在之后打开：

![gif_refresh.png](/createawearable/gif_refresh.png)

10. 如果收到了**ok**，请刷新浏览器，然后再次单击**🏭Mint**，然后向下滚动以查看提交

![gif_fixed.png](/createawearable/gif_fixed.png)

11. 如果一切看起来正常，请单击**Mint**。如果出现问题，请单击**Reject**。

12. 如果您将其铸造，您的钱包将弹出以确认交易，这将需要非常少量的 Matic（或 ETH）- 单击确认以继续铸造。

![token_id.png](/createawearable/token_id.png)

13. 在*Collectible submissions*下，将有一个右侧的链接，写着**Collectible ready** - 点击它

![collectible_ready.png](/createawearable/collectible_ready.png)

14. 您现在应该在 Cryptovoxels 页面上看到您的可穿戴物品

![mint_success.png](/createawearable/mint_success.png)

恭喜，您刚刚铸造了您的第一个可穿戴物品！

:::info
转到[此处](/docs/Player_customization/Costume_tab)了解如何穿戴可穿戴物品。
:::


#### 提交到公共收藏品
如果您没有拥有地块，您可以随时提交到公共收藏品。

1. 前往 https://www.cryptovoxels.com/collections
2. 单击**Available to public**复选框
3. 选择一个收藏品
4. 单击**🏭Submit**按钮

![public_collection.png](/createawearable/public_collection.png)

5. 阅读警告，填写信息，然后在底部选中复选框，然后单击**Submit**按钮
6. 您现在必须等待它获得收藏品所有者的批准 - 您可能需要通过 Cryptovoxels / Discord 向他们发送消息
7. 一旦由收藏品所有者铸造，您将在 Cryptovoxels 上收到一条消息（如果您收到了红色小圆点旁边的**Inbox**，则会看到它）

### 交易一个可穿戴物品
您可以在 Cryptovoxels 网站或 OpenSea 上转让可穿戴物品。

#### 在 Cryptovoxels 上交易
要使用 Cryptovoxels 网站进行转让，请前往您要发送的可穿戴物品 [例如 https://www.cryptovoxels.com/collections/1/1] 并单击底部的 Transfer 按钮。如果您看不到 Transfer 按钮，则意味着您需要在您的钱包上切换网络，或者您不拥有该可穿戴物品的任何数量。

![transfer_wearable.png](/

createawearable/transfer_wearable.png)

要完成交易，请输入购买者的地址。

#### 在 OpenSea 上交易
要使用 OpenSea 进行转让，请前往[OpenSea Cryptovoxels 市场](https://opensea.io/assets/cryptovoxels)并搜索您的地址。您可以将您的地址复制并将其粘贴到 OpenSea 搜索栏中，或者访问您的[Cryptovoxels 钱包页面](https://www.cryptovoxels.com/account/wallet)以获取直接链接。

![opensea_market.png](/createawearable/opensea_market.png)

一旦您找到了您的地址，您将看到您在 Cryptovoxels 中拥有的所有 NFT - 包括可穿戴物品。

![opensea_wallet.png](/createawearable/opensea_wallet.png)

要在 OpenSea 上交易，只需单击您要交易的可穿戴物品，然后单击右上角的**Sell**按钮。填写所需的信息，然后单击**List**按钮即可。

![sell_on_opensea.png](/createawearable/sell_on_opensea.png)

请记住，您可以自由设置价格，但 OpenSea 还会向您收取一些费用。

### 接收付款
如果您在 OpenSea 上出售了您的可穿戴物品，您可以随时从 OpenSea 提取您的收益。

1. 前往[OpenSea 的「资产」页面](https://opensea.io/account)并登录
2. 在左侧菜单中选择**Assets**
3. 找到您的可穿戴物品并单击它
4. 单击**Withdraw**按钮

![opensea_withdraw.png](/createawearable/opensea_withdraw.png)

5. 输入您的银行账号信息（或选择其他提款方法）并单击**Continue**按钮
6. 按照说明完成提款过程

### 维护和管理
一旦您的可穿戴物品在 Cryptovoxels 或 OpenSea 上出售，您可能会想要定期检查并管理它们。

在 Cryptovoxels 中，您可以随时在[「物品」页面](https://www.cryptovoxels.com/account/collectibles)找到您的所有 NFT（包括可穿戴物品）。

在 OpenSea 中，您可以在[「资产」页面](https://opensea.io/account)找到您的所有 NFT，并随时进行管理。

### 定价建议
为了确定您的可穿戴物品的价格，您可以查看 Cryptovoxels 和 OpenSea 上类似物品的价格。请注意，稀有度、设计和需求等因素可能会影响价格。

请务必定期查看市场动态，并根据需求和供应做出相应的调整。

## 4. 审核和审查
Cryptovoxels 团队会定期审核和审查提交的可穿戴物品，以确保它们符合社区准则。

审核通常需要几天时间，具体取决于审查队列的长度。

一旦您的可穿戴物品通过审核，它将可以在 Cryptovoxels 中穿戴和交易。

如果您的可穿戴物品未通过审核，您将会收到一封通知，其中包含了被拒绝的原因。

## 5. 社区准则
当您创建可穿戴物品时，请确保遵循 Cryptovoxels 的社区准则：

- 不要包含冒犯性、歧视性或不适宜工作场所的内容。
- 避免使用受版权保护的材料，除非您有合适的授权或所有权。
- 不要创建欺骗性或误导性的可穿戴物品。
- 不要在可穿戴物品中包含暴力、淫秽、恶俗或非法内容。

## 6. 常见问题解答
### 我需要在 Cryptovoxels 中拥有地块才能创建可穿戴物品吗？
是的，您需要拥有一个地块才能创建可穿戴物品。

### 我可以在一个收藏品中拥有多个可穿戴物品吗？
是的，您可以在一个收藏品中拥有多个可穿戴物品。

### 我可以在一个地块上拥有多个收藏品吗？
不，您只允许在每个拥有的地块上创建一个收藏品。

### 我可以在 Cryptovoxels 上免费铸造我的可穿戴物品吗？
铸造可穿戴物品会产生一些费用，您将需要一些 Matic（或 ETH）来支付这些费用。

### 我可以在 OpenSea 上出售我的可穿戴物品吗？
是的，您可以将您的可穿戴物品在 OpenSea 上进行转让。

### 我如何接收来自 OpenSea 的付款？
您可以从 OpenSea 提取您在交易中获得的收益。请参考上述说明以了解详细步骤。

### 我的可穿戴物品未通过审核，我可以做些什么？
如果您的可穿戴物品未通过审核，您将收到一封通知，其中包含了被拒绝的原因。您可以根据反馈对可穿戴物品进行修改并重新提交审核。

### 我可以在 Cryptovoxels 中穿戴我的可穿戴物品吗？
是的，一旦您的可穿戴物品通过审核，您可以在 Cryptovoxels 中穿戴它们。

### 我可以随时更改我的可穿戴物品的定价吗？
是的，您可以随时在 Cryptovoxels 或 OpenSea 上更改您的可

穿戴物品的定价。

### 我可以创建动画的可穿戴物品吗？
是的，您可以通过上传包含动画的 vox 文件来创建动画的可穿戴物品。

## 结论
希望这份指南对您在 Cryptovoxels 中创建和交易可穿戴物品时有所帮助！如果您有任何其他问题或需要进一步的协助，请随时提问。祝您成功！