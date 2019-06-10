pragma solidity ^0.5.4;

contract SimpleLoan {
    address owner;

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Unautorized");
        _;
    }
}