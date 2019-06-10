pragma solidity ^0.5.4;

contract CryptoLoan {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    function addLoan (address _payee, uint principle, uint rate, uint time) public {
        uint interest = (principle * rate * time) / 100;
        uint amount = principle + interest;
        loanRecords[_payee] = amount;
    }

    function viewLoan (address _payee) public view returns(uint) {
        return loanRecords[_payee];
    }
}