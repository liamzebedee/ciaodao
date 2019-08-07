pragma solidity ^0.5.6;

import "ds-test/test.sol";

import "./GUACToken.sol";
import "./MemberNFT.sol";
import "./System.sol";

contract TestMemberNFT is DSTest {
    System system;
    GUACToken guac;

    function setUp() public {
        system = new System();
        guac = new GUACToken(system);

        system.inject("GUACToken", address(guac));
    }
    
    function testJoin() public {
        MemberNFT members = new MemberNFT(system);
        system.inject("MemberNFT", address(members));
        guac.setup();
        
        uint memberId = members.join.value(members.getMinimumDeposit())("camus");
        
        assert(guac.balanceOf(address(memberId)) == members.getInitialReputation());
        assert(members.ownerOf(memberId) == address(this));
    }
}