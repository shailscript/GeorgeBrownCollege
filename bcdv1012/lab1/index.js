const ethers = require('ethers');
const utils = require('ethers/utils');

let privateKey = '0x3141592653589793238462643383279502884197169399375105820974944592';
let provider = ethers.getDefaultProvider('ropsten');
let wallet = new ethers.Wallet(privateKey, provider);
//0x7357589f8e367c2C31F51242fB77B350A11830F3

console.log(`Wallet address: ${wallet.address}`);

async function createAndSignTransaction() {
    let nonce = await wallet.getTransactionCount('pending');

    let transaction = {
        to: "0x1dBEbD485dbA41E87d0B47B08d0fF5b0d2dA480D",
        gasLimit: 21000,
        gasPrice: utils.bigNumberify("20000000000"),
        nonce: nonce,
        data: '0x',
        value: utils.parseEther('0.1'),
        chainId: ethers.utils.getNetwork('ropsten').chainId //To prevent replay attacks on diff networks
    }

    console.log(`Transaction object: ${ JSON.stringify(transaction) }`);
    console.log(`Signed tx: ${ await wallet.sign(transaction) }`);
}

createAndSignTransaction();
