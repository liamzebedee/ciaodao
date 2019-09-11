pragma solidity >=0.4.21 <0.6.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IMembershipResolver.sol";

contract ERC20MembershipResolver is IMembershipResolver {
    IERC20 erc20;
    
    constructor(address _IERC20) public {
        erc20 = IERC20(_IERC20);
    }

    function isMember(address x) public view returns (bool) {
        return erc20.balanceOf(x) > 0;
    }
}