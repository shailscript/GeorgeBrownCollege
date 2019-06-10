pragma solidity ^0.5.4;

contract SimpleLoan {
    address owner;

    constructor() public {
        owner = msg.sender;
    }
    
}
