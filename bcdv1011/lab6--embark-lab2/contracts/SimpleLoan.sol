pragma solidity ^0.5.4;

contract SimpleLoan {
    address owner;
    mapping (address => uint) loanRecords;

    constructor() public {
        owner = msg.sender;
    }
    
    modifier onlyOwner {
        require(owner == msg.sender, "Unauthorized");
        _;
    }
}
