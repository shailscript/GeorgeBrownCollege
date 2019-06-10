let SimpleLoan = require('Embark/contracts/SimpleLoan');

let accounts;

config({
    contracts: {
        SimpleLoan,
    }
}, (_err, web3_accounts) => {
    accounts = web3_accounts;
});

contract('SimpleLoan', async () => {
    it("Should be deployed properly", async () => {
        assert.ok(SimpleLoan.options.address);
    });
    
    it("Should be called by owner", async () => {
        let response = await SimpleLoan.methods.addLoan('0xed54f39cc9a9cbd9bd4f8fb743769280bbf76b07', 1000, 2, 2).send({from: accounts[0]});
        let loan = await SimpleLoan.methods.viewLoan('0xed54f39cc9a9cbd9bd4f8fb743769280bbf76b07').call();
        assert.equal(loan, 1040);
    });

    it("Should fail when called by others", async () => {
        try {
            await SimpleLoan.methods.addLoan('0xed54f39cc9a9cbd9bd4f8fb743769280bbf76b07', 1000, 2, 2).send({from: accounts[1]});
        } catch (error) {
            assert(error.message.includes("Unauthorized"));
        }
    });
});
