pragma solidity ^0.5.4;

contract SimpleStorage {
  uint256 public value;
/// kdsfhlkwejd fil j
  function setValue(uint256 _val) public {
    value = _val;
  }

  function getValue() public view returns (uint256) {
    return value;
  }
}