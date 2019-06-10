let CryptoLoan = require('Embark/contracts/CryptoLoan');

let accounts;

config({
    contracts: {
        CryptoLoan: {},
    },
}, (_err, web3_acccounts) => {
    accounts = web3_acccounts;
});

contract('CryptoLoan', () => {
    it("Should be deployed properly", async () => {
        assert.ok(CryptoLoan.options.address);
    });

    it('Should add a loan', async () => {
        let response = await CryptoLoan.methods.addLoan('0xed54f39cc9a9cbd9bd4f8fb743769280bbf76b07', 1000, 2, 2).send();
        let loan = await CryptoLoan.methods.viewLoan('0xed54f39cc9a9cbd9bd4f8fb743769280bbf76b07').call();
        assert.equal(loan, 1040);
    });

    it('Should edit a loan', async () => {
        let response = await CryptoLoan.methods.editLoan('0xed54f39cc9a9cbd9bd4f8fb743769280bbf76b07', 104).send();
        let loan = await CryptoLoan.methods.viewLoan('0xed54f39cc9a9cbd9bd4f8fb743769280bbf76b07').call();
        assert.equal(loan, 104);
    });
});
