const ethers = require('ethers');

const contractABI = ['function increment(uint256 _counter) public returns(uint256)'];

const contractInterface = new ethers.utils.Interface(contractABI);

const increment = contractInterface.functions.increment;

// Now we encode data to send it to the transaction

const encodedData = increment.encode([2]);

console.log(encodedData);
