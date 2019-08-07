pragma solidity ^0.5.6;

// import "./GUACToken.sol";
// import "./MemberNFT.sol";
// import "./Registry.sol";


// Injects addresses of all components
contract System {

    mapping(string => address) deployments;

    constructor(
        // address _MemberNFT,
        // address _GUACToken,
        // address _Registry
    ) public {
        // memberNft = MemberNFT(_MemberNFT);
        // guac = GUACToken(_GUACToken);
        // registry = Registry(_Registry);
    }

    function injectAll(
        address _MemberNFT,
        address _GUACToken,
        address _Registry
    ) external {
        inject("MemberNFT", _MemberNFT);
        inject("GUACToken", _GUACToken);
        inject("Registry", _Registry);
    }

    function inject(string memory contractName, address deployment) public {
        deployments[contractName] = deployment;
    }

    function lookup(string memory contractName) public view returns (address) {
        return deployments[contractName];
    }
}