# 验证您的合约

如何在etherscan/polygonscan上验证您的合约

## 1. 前往浏览器的验证页面
只需将`[YOUR_CONTRACT_ADDRESS]`替换为您的收藏合约地址（您可以在收藏的管理页面找到它）。

**对于etherscan :**
`https://etherscan.io/verifyContract?a=[YOUR_CONTRACT_ADDRESS]`
**对于polygonscan:**
`https://polygonscan.com/verifyContract?a=[YOUR_CONTRACT_ADDRESS]`

## 2. 输入编译器参数
在验证页面上，编辑以下内容：
**编译器类型：Solidity - 单文件
编译器版本：0.8.0
许可证：MIT**
![[collections]how_to_verify_contract_step1.png](/tutorials/[collections]how_to_verify_contract_step1.png)

点击 **继续**；

## 3. 输入Solidity代码
**A.** 设置 **优化 = true**
**B.** 在新标签页中打开并访问Cryptovoxel的[GitHub上的CV/contracts](https://github.com/cryptovoxels/contracts/blob/master/contracts/cvCollectibles.sol)，复制合约 `cvCollectible.sol` 的代码。
**C.** 将代码粘贴到文本区域中的“在此处输入Solidity合约代码”

![[collections]how_to_verify_contract_step2_.png](/tutorials/[collections]how_to_verify_contract_step2_.png)

## 3. 解析合约ABI
**A.** 前往[https://abi.hashex.org/](https://abi.hashex.org/)，这是一个可以帮助您生成构造函数参数的网站。

**B.** 在新标签页中打开[合约的ABI](https://raw.githubusercontent.com/cryptovoxels/contracts/master/abis/cvCollectible.abi)并复制代码（按<kbd>CTRL/CMD+A</kbd>然后<kbd>CTRL/CMD+C</kbd>）。

**C.** 返回到[https://abi.hashex.org/](https://abi.hashex.org/)的标签页中，**粘贴ABI**代码到大文本区域中，然后点击**解析**

![[collections]how_to_abiencoder.png](/tutorials/[collections]how_to_abiencoder.png)

## 4. 输入构造函数参数
我们的目标是填写出现在文本区域下方的两个输入框。

**A.** 对于 `uri_` 字段，请输入 `https://www.cryptovoxels.com/c/[MY_COLLECTION_ID]/{id}`；将 `[MY_COLLECTION_ID]` 替换为您的收藏ID。

**B.** 对于 `name_` 字段，请输入您在创建合约时输入的合约名称。这将是在创建收藏时点击 **上传和部署** 之前输入的名称（参见下图）

![[collections]how_to_get_contract_name.png](/tutorials/[collections]how_to_get_contract_name.png)

如果您忘记了自己写了什么，您可以前往opensea上您的收藏商店页面，**-如果您没有更改商店的URL-** 则URL 应该会提示收藏名称。
例如：
![[collections]how_to_get_hint_contract_name.png](/tutorials/[collections]how_to_get_hint_contract_name.png)
上图中显示的URL暗示了此收藏的合约名称为 `mattyc wearables`；**然而**，这只是一个提示，因为它不区分大小写。也就是说，也许它是 `Mattyc Wearables` 或 `maTTyC WearABlEs`。由您决定。

**C.** 当您输入参数时，底部将自动生成字节码。完成后点击 **复制**。

![[collections]example_enter_parameter_abi_encode.png](/tutorials/[collections]example_enter_parameter_abi_encode.png)

## 4. 验证合约

**A.** 返回到etherscan，并将在步骤 **3** 中复制的字节码粘贴到构造函数参数字段中。

**B.** 点击 `我不是机器人`，然后点击 `验证并发布`

![[collections]paste_bytecode_constructor.png](/tutorials/[collections]paste_bytecode_constructor.png)

## 5. 错误时重试？

如果您的验证失败，很可能是因为步骤3中的合约名称错误。