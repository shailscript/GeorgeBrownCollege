const ethers = require('ethers');
require('dotenv').config();

const provider = ethers.getDefaultProvider('ropsten');

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
