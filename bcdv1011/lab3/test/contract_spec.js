// /*global contract, config, it, assert*/

const Counter = require('Embark/contracts/Counter');

let accounts;

// For documentation please see https://embark.status.im/docs/contracts_testing.html
config({
  //deployment: {
  //  accounts: [
  //    // you can configure custom accounts with a custom balance
  //    // see https://embark.status.im/docs/contracts_testing.html#Configuring-accounts
  //  ]
  //},
   contracts: {
     Counter: {}
   }
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});

contract("Counter", function () {
  this.timeout(0);

  it("Is deployed?", async function () {
    assert.ok(Counter.options.address);
  });

  it('Should increment counter', async function() {
    let initialCount = await Counter.methods.getCount().call();
    let response = await Counter.methods.increment().call();
    assert.ok(parseInt(response) == (initialCount+1));
  });
});