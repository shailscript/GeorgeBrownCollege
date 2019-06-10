let CryptoLoan = require('Embark/contracts/CryptoLoan');

let accounts;

config({
    contracts: {
        CryptoLoan: {},
    },
}, (_err, web3_acccounts) => {
    accounts = web3_acccounts
});
