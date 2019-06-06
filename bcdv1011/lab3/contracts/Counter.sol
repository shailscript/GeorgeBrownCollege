pragma solidity ^0.5.4;

contract Counter {

    /* define variable count of the type uint */
    uint count = 0;

    /* this runs when the contract is executed */
    function increment() public returns (uint) {
       count = count + 1;
       return count;
    }

    /* used to read the value of count */
    function getCount() public view returns (uint) {
       return count;
    }

}