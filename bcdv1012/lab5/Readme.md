#Where does your DApp interact with the blockchain at a network level? 
Alhough my dApp doesn't interact with the provider information as much, yet if it does in future, it can be extracted from the provider information. In Ethers.js methods and information present in the provider solves this really well. I'm planning to obtain gas price before executing functions, for efficiency. 
Ex.
``` prototype.getGasPrice() ```


#Where does your DApp interact with smart contracts?
Ethers.js provides Contracts API to interact with the dApp. It uses ABI and interafce to connect to a smart contract.
My dApp uses identity pattern so it would make a call to the smart contract in order to identify a user by any means, be it for logging in or to call methods. The EventEmmiter API in Ethers.js also supports events. So, I can use EventEmmiter API to call specified actions for specific events.
Ex. 
```
prototype.sendTransaction( signedTransaction ) //Contracts API
prototype.on( eventType, callback ) // EventEmmiter API
```

#How are are external accounts created and managed?
External accounts can be created using Signer API. Wallet implements Signer API. There are 4 ways of doing that which are listed below in the example
Ex. 
```
new Wallet ( privateKey )
Wallet.createRandom()
Wallet.fromEncryptedJson( json, password )
Wallet.fromMnemonic( mnemonic )
```

#What cryptographic functions are needed?
I might need keccak256 for my dApp. So I woukd use utils library provided by Ethers.js.
Ex. 
```
utils.keccak256( hexString )
```

Ref: https://docs.ethers.io/