How to verify your collection on etherscan/polygonscan

# 1. Go to your explorer's verify page
Just replace the `[YOUR_CONTRACT_ADDRESS]` with your collection's contract address (you can find it in your collection's admin page.

**For etherscan :**
`https://etherscan.io/verifyContract?a=[YOUR_CONTRACT_ADDRESS]`
**For polygonscan:**
`https://polygonscan.com/verifyContract?a=[YOUR_CONTRACT_ADDRESS]`

# 2. Enter compiler parameters
On the verify page, edit the following:
**Compiler type: Solidity - Single File
Compiler version: 0.8.0
License: MIT**
![[collections]how_to_verify_contract_step1.png](/tutorials/[collections]how_to_verify_contract_step1.png)

Press **continue**;

# 3. Enter solidity code
**A.** Set **Optimization = true**
**B.** Open a new tab and go to Cryptovoxel's [CV/contracts on github](https://github.com/cryptovoxels/contracts/blob/master/contracts/cvCollectibles.sol) and copy the code of the contract `cvCollectible.sol`
**C.** Paste the code inside the text area `Enter the Solidity Contract Code below`

![[collections]how_to_verify_contract_step2_.png](/tutorials/[collections]how_to_verify_contract_step2_.png)

# 3. Parse Contract ABI
**A.** Go to [https://abi.hashex.org/](https://abi.hashex.org/), it's a website that will help generate the constructor parameters for you.

**B.** Open in a new tab [The ABI of the contract](https://raw.githubusercontent.com/cryptovoxels/contracts/master/abis/cvCollectible.abi) and copy the code (<kbd>CTRL/CMD+A</kbd> and <kbd>CTRL/CMD+C</kbd> ).

**C.** Return to the tab that's on [https://abi.hashex.org/](https://abi.hashex.org/) and **paste the ABI** code in the big text area and click **Parse**

![[collections]how_to_abiencoder.png](/tutorials/[collections]how_to_abiencoder.png)

# 4. Enter constructor parameters
Now our goal is to fill up the two inputs that appeared under the text area.

**A.** For the `uri_` field, enter `https://www.cryptovoxels.com/c/[MY_COLLECTION_ID]/{id}`; replace `[MY_COLLECTION_ID]` with your collection ID.

**B.** For the `name_` field, enter the name of the contract you entered when you made your contract. This would be the name you entered before clicking **Upload and Deploy** when creating a collection. (See image below)

![[collections]how_to_get_contract_name.png](/tutorials/[collections]how_to_get_contract_name.png)

If you don't remember what you wrote, you can head to the store page of your collection on opensea and **-if you haven't changed the URL of your store-** the url should be hinting to the collection name.
For example: 
![[collections]how_to_get_hint_contract_name.png](/tutorials/[collections]how_to_get_hint_contract_name.png)
The url shown in the picture above hints that the contract of this collection was named `mattyc wearables`; **However**, this only a hint as it is case insensitive. i.e, maybe it is `Mattyc Wearables` or `maTTyC WearABlEs`. Up to you.

**C.** As you enter the parameters you will see a bytecode being automatically generated at the bottom of the page. Click **Copy** once you're done.

![[collections]example_enter_parameter_abi_encode.png](/tutorials/[collections]example_enter_parameter_abi_encode.png)

# 4. Verify contract

**A.** Head back to your etherscan and paste the bytecode you copied in step **3** into the constructor arguments field.

**B.** Hit `I'm not a robot` and click `Verify and Publish`

![[collections]paste_bytecode_constructor.png](/tutorials/[collections]paste_bytecode_constructor.png)

# 5. Retry on error?

If your verification failed, it is very likely because the name of the contract in step 3 is wrong.
