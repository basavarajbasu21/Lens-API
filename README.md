"# Lens-API"
### Node.js Project Setup Guide

#### Initialize a Node.js Project
1. Open your terminal and run the following commands:

```bash
mkdir lens-signless-example
cd lens-signless-example
npm init -y
```

#### Install Required Packages
2. Install the Lens SDK and other necessary packages:

```bash
npm install @lens-protocol/client ethers dotenv
```
#### Run the code
```bash
node index.js
```

#### Summary
- `mkdir lens-signless-example` creates a new directory for the project.
- `cd lens-signless-example` navigates into the project directory.
- `npm init -y` initializes a new Node.js project with default settings.
- `npm install @lens-protocol/client ethers dotenv` installs the required dependencies for working with the Lens Protocol.
- 'node index.js' Run the code.

Your Node.js project is now set up and ready to use.

# Configuration File

PRIVATE_KEY=your_private_key_here  # Your Ethereum private key (Keep this secure and never share it!)
INFURA_PROJECT_ID=your_infura_project_id_here  # Infura Project ID for Ethereum node access
LENS_PROFILE_ID=your_lens_profile_id_here  # Your Lens Protocol Profile ID
IPFS_POST_URI=ipfs://your_ipfs_post_uri_here  # IPFS URI for your post content
IPFS_COMMENT_URI=ipfs://your_ipfs_comment_uri_here  # IPFS URI for your comment content
TARGET_PUBLICATION_ID=your_target_publication_id_here  # Target publication ID for Lens Protocol interactions

# Ethereum wallet address: your_ethereum_wallet_address_here  # Your Ethereum wallet address
# Your Secret Recovery Phrase: your_secret_recovery_phrase_here  # Keep this phrase secure; never share it!

**README: How to Obtain the Required IDs and Keys**

### 1. Private Key
- Create an Ethereum wallet using **MetaMask** or **MyEtherWallet**.
- Go to **Settings > Security & Privacy** to reveal your private key.
- **Never share this key with anyone!** Store it securely in an encrypted file.

### 2. Infura Project ID
- Sign up at [Infura](https://infura.io/).
- Create a new project in the Infura dashboard.
- Copy the **Project ID** from the project settings.

### 3. Lens Profile ID
- Sign in to [Lens Protocol](https://lens.xyz/).
- Find your Profile ID from the API or Lens Explorer.

### 4. IPFS URIs
- Upload your content to [Pinata](https://www.pinata.cloud/) or [NFT.Storage](https://nft.storage/).
- Copy the IPFS CID and format it as:
  ```
  ipfs://<your_cid>
  ```

### 5. Target Publication ID
- Retrieve it using the Lens API by querying your past publications.

