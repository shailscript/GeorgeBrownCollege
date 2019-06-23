const ethers = require('ethers');
const abi = require('./abi');

require('dotenv').config();

const provider = ethers.getDefaultProvider('ropsten');

const contractAddress = '0x96900eDA2023262475A560f8f040B2d8CB87d483'; //Update env variable recommended

const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS || contractAddress, abi, provider);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const signedContract = contract.connect(wallet);

async function callContract() {
    let count = await contract.getCount();
    console.log(`Count: ${count}`);

    console.log('Calling increment method of contract...')
    await signedContract.increment();

    console.log('Please wait...')

    await contract.on('incremented', (_newCount, _caller, event) => {
        console.log(`Event emmiter: ${event.blockNumber}`);
        console.log(`Event author: ${_caller}`);
        console.log(`Count updated to: ${_newCount}`);
        process.exit(0);
    })
};

callContract();
