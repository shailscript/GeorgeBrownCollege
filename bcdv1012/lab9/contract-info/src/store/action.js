import ethers from 'ethers';

let etherscanProvider = new ethers.providers.EtherscanProvider();

export const transactionRequest = async (hash) => {
    const txs = await etherscanProvider.getHistory(hash);
    console.log(txs);
};