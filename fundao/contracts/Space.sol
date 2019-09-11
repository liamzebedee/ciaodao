pragma solidity >=0.4.21 <0.6.0;

import "./IMembershipResolver.sol";

contract Space is IMembershipResolver {
    IMembershipResolver membershipResolver;

    constructor(IMembershipResolver _IMembershipResolver) public {
        membershipResolver = _IMembershipResolver;
    }

    function isMember(address a) public view returns (bool) {
        return membershipResolver.isMember(a);
    }
}