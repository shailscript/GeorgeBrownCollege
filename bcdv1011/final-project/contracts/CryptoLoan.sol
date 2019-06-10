pragma solidity ^0.5.4;

contract CryptoLoan {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }
}