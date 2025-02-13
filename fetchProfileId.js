const axios = require('axios');

// Replace with the wallet address you want to query
const WALLET_ADDRESS = 'Replace with the wallet address you want to query';

// Lens API endpoint
const LENS_API_URL = 'https://api-v2.lens.dev/';

// Corrected GraphQL query
const query = `
  query {
    profiles(request: { where: { ownedBy: ["${WALLET_ADDRESS}"] }, limit: Ten }) {
      items {
        id
        handle {
          fullHandle
        }
        ownedBy {
          address
        }
      }
    }
  }
`;

// Function to fetch Lens Profile ID
const fetchLensProfileId = async () => {
  try {
    const response = await axios.post(
      LENS_API_URL,
      { query },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Check if profiles exist
    const profiles = response.data.data.profiles.items;
    if (profiles.length === 0) {
      console.log('No Lens profiles found for this wallet address.');
    } else {
      console.log('Lens Profiles:');
      profiles.forEach((profile, index) => {
        console.log(`Profile ${index + 1}:`);
        console.log(`- ID: ${profile.id}`);
        console.log(`- Handle: ${profile.handle.fullHandle}`);
        console.log(`- Owned By: ${profile.ownedBy.address}`);
        console.log('-----------------------------');
      });
    }
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

// Run the function
fetchLensProfileId();