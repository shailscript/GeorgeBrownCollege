let SimpleLoan = reqiure('Embark/contracts/SimpleLoan');

let accounts;

config({
    contracts: {
        SimpleLoan,
    }
}, (_err, web3_accounts) => {
    accounts = web3_accounts;
});

contract('SimpleLoan', async () => {
    //Tests here.
});