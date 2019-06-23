const ethers = require('ethers');
const abi = require('./abi');
const bytecode = require('./bytecode');

require('dotenv').config();

const provider = ethers.getDefaultProvider('ropsten');

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const factory = new ethers.ContractFactory(abi, bytecode, wallet);

async function deployContract() {
    const contract = await factory.deploy();
    console.log(`Contract Info: ${contract}`);
    console.log(`Contract Address: ${contract.address}`);
};

deployContract();