let SimpleLoan = require('Embark/contracts/SimpleLoan');

let accounts;

config({
  contracts: {
    SimpleLoan: {},
  },
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});
