pragma solidity >=0.4.21 <0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IMembershipResolver {
    function isMember(address x) external returns (bool);
}


contract ERC721SpaceCadet is ERC721Full {
    constructor(string memory name, address[] memory invitees) ERC721Full("", "XXX") public {
        uint tokenId = 0;
        _mint(msg.sender, tokenId++);
        for(uint i = 0; i < invitees.length; i++) {
            _mint(invitees[i], tokenId++);
        }
    }
}

contract ERC20MembershipResolver is IMembershipResolver {
    IERC20 erc20;
    
    constructor(address _IERC20) public {
        erc20 = IERC20(_IERC20);
    }

    function isMember(address x) public returns (bool) {
        return erc20.balanceOf(x) > 0;
    }
}

contract ERC721MembershipResolver is IMembershipResolver {
    IERC721 erc721;
    
    constructor(address _IERC721) public {
        erc721 = IERC721(_IERC721);
    }

    function isMember(address x) public returns (bool) {
        return erc721.balanceOf(x) > 0;
    }
}

contract Space is IMembershipResolver {
    IMembershipResolver membershipResolver;

    constructor(IMembershipResolver _IMembershipResolver) public {
        membershipResolver = _IMembershipResolver;
    }

    function isMember(address a) public returns (bool) {
        return membershipResolver.isMember(a);
    }
}

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