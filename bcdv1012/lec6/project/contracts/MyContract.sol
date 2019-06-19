pragma solidity ^0.5.0;

import "../node_modules/zos-lib/contracts/Initializable.sol";

contract MyContract is Initializable {
    uint256 public x;
    string public s;

    function initializ(uint256 _x, string memory _s) public initializer {
        x = _x;
        s = _s;
    }

    function increment() public {
        x += 1;
    }
}