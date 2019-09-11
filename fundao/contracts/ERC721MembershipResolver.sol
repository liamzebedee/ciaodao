pragma solidity >=0.4.21 <0.6.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./IMembershipResolver.sol";

contract ERC721MembershipResolver is IMembershipResolver {
    IERC721 erc721;
    
    constructor(address _IERC721) public {
        erc721 = IERC721(_IERC721);
    }

    function isMember(address x) public view returns (bool) {
        return erc721.balanceOf(x) > 0;
    }
}