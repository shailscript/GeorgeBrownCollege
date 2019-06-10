let CryptoLoan = require('Embark/contracts/CryptoLoan');

let accounts;

config({
    contracts: {
        CryptoLoan: {},
    },
}, (_err, web3_acccounts) => {
    accounts = web3_acccounts
});

contract('CryptoLoan', () => {
    it("Should be deployed properly", async function() {
        assert.ok(CryptoLoan.options.address);
    });
})