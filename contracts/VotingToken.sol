//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VotingToken is ERC20 {

    address public owner;
    constructor(uint256 initialSupply) ERC20("VoteForEth", "VFE") {
        _mint(msg.sender, initialSupply);
        owner = msg.sender;
    }

    
}