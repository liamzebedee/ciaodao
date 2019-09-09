pragma solidity >=0.4.21 <0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ERC721SpaceCadet is ERC721Full {
    uint tokenId = 0;

    constructor(string memory name, address[] memory invitees) ERC721Full("", "XXX") public {
        _mint(msg.sender, tokenId++);
        inviteMembers(invitees);
    }

    function inviteMembers(address[] memory invitees) public {
        require(balanceOf(msg.sender) > 0);
        for(uint i = 0; i < invitees.length; i++) {
            _mint(invitees[i], tokenId++);
        }
    }
}