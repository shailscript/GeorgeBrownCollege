let CryptoLoan = require('Embark/contracts/CryptoLoans');

let accounts;

config({
    contracts: {
        CryptoLoan: {},
    },
}, (_err, web3_accounts) => {
    accounts = web3_accounts;
});
