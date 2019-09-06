pragma solidity >=0.4.21 <0.6.0;

import "./Space.sol";
import "./ERC20MembershipResolver.sol";
import "./ERC721MembershipResolver.sol";
import "./ERC721SpaceCadet.sol";

// TODO(liamz): typo should be space factory
contract SpaceCadetFactory {
    event NewSpace(address indexed space, string indexed name);

    constructor() public {
    }

    function createERC20Space(string calldata name, address erc20) external {
        Space space = new Space(new ERC20MembershipResolver(erc20));
        emit NewSpace(address(space), name);
    }

    function createERC721Space(string calldata name, address erc721) external {
        Space space = new Space(new ERC721MembershipResolver(erc721));
        emit NewSpace(address(space), name);
    }

    function createSpace(string calldata name, address[] calldata invitees) external {
        ERC721SpaceCadet erc = new ERC721SpaceCadet(name, invitees);
        this.createERC721Space(name, address(erc));
    }
}
