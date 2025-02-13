require('dotenv').config();
const { ethers } = require('ethers');
const axios = require('axios');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const LENS_PROFILE_ID = process.env.LENS_PROFILE_ID;
const IPFS_POST_URI = process.env.IPFS_POST_URI;
const IPFS_COMMENT_URI = process.env.IPFS_COMMENT_URI;
const TARGET_PUBLICATION_ID = process.env.TARGET_PUBLICATION_ID;

// Polygon Mumbai Testnet Provider
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.infura.io/v3/${INFURA_PROJECT_ID}`);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

const LENS_API = 'https://api.lens.dev/';  // Mainnet API (use https://api-mumbai.lens.dev/ for testnet)

// Function to sign a transaction
async function signMessage(message) {
    const signature = await wallet.signMessage(message);
    return signature;
}

// Function to create a new post on Lens
async function createPost() {
    try {
        const query = {
            query: `
                mutation CreatePost($request: CreatePublicPostRequest!) {
                    createPostTypedData(request: $request) {
                        id
                        typedData {
                            types {
                                Post {
                                    name
                                    type
                                }
                            }
                            domain {
                                name
                                chainId
                                verifyingContract
                                version
                            }
                            value {
                                profileId
                                contentURI
                                collectModule
                                collectModuleInitData
                                referenceModule
                                referenceModuleInitData
                            }
                        }
                    }
                }
            `,
            variables: {
                request: {
                    profileId: LENS_PROFILE_ID,
                    contentURI: IPFS_POST_URI,
                    collectModule: {
                        freeCollectModule: {
                            followerOnly: false
                        }
                    },
                    referenceModule: {
                        followerOnlyReferenceModule: false
                    }
                }
            }
        };

        const response = await axios.post(LENS_API, query);
        console.log("Post Created Successfully:", response.data);
    } catch (error) {
        console.error("Error creating post:", error.response ? error.response.data : error);
    }
}

// Function to comment on an existing publication
async function commentOnPost() {
    try {
        const query = {
            query: `
                mutation CreateComment($request: CreatePublicCommentRequest!) {
                    createCommentTypedData(request: $request) {
                        id
                        typedData {
                            types {
                                Comment {
                                    name
                                    type
                                }
                            }
                            domain {
                                name
                                chainId
                                verifyingContract
                                version
                            }
                            value {
                                profileId
                                contentURI
                                publicationId
                                collectModule
                                collectModuleInitData
                                referenceModule
                                referenceModuleInitData
                            }
                        }
                    }
                }
            `,
            variables: {
                request: {
                    profileId: LENS_PROFILE_ID,
                    contentURI: IPFS_COMMENT_URI,
                    publicationId: TARGET_PUBLICATION_ID,
                    collectModule: {
                        freeCollectModule: {
                            followerOnly: false
                        }
                    },
                    referenceModule: {
                        followerOnlyReferenceModule: false
                    }
                }
            }
        };

        const response = await axios.post(LENS_API, query);
        console.log("Comment Created Successfully:", response.data);
    } catch (error) {
        console.error("Error creating comment:", error.response ? error.response.data : error);
    }
}

// Run both functions
(async () => {
    await createPost();
    await commentOnPost();
})();
