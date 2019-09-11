pragma solidity >=0.4.21 <0.6.0;

interface IMembershipResolver {
    function isMember(address x) external view returns (bool);
}