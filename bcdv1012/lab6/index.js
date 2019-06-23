const ethers = require('ethers');
const abi = require('./abi');
const bytecode = require('./bytecode');

require('dotenv').config();

const provider = ethers.getDefaultProvider('ropsten');

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
