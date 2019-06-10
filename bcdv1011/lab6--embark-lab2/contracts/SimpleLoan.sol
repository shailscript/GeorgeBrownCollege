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

    function addLoan (address _payee, uint principle, uint rate, uint time) public onlyOwner{
        uint interest = (principle * rate * time)/100;
        uint amount = principle+interest;
        loanRecords[_payee] = amount;
    }

    function viewLoan (address _payee) public view returns(uint) {
        return loanRecords[_payee];
    }
}
