let CryptoLoan = require('Embark/contracts/CryptoLoans');

let accounts;

config({
    contracts: {
        CryptoLoan: {},
    },
}, (_err, web3_accounts) => {
    accounts = web3_accounts;
});

contract("CryptoLoan", function() {
    this.timeout(0);

    it("Should be deployed properly", async function() {
        console.log(CryptoLoan.options);
        //assert.ok(CryptoLoan.options.address);
    });
});