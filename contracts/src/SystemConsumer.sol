
// import "./GUACToken.sol";
// import "./MemberNFT.sol";
// import "./Registry.sol";

import "./System.sol";

contract SystemConsumer {
    System internal system;

    constructor(System _System) public {
        system = System(_System);
    }

    // function inject(string contractName, address deployment) public {
    // }

    function getRegistry() public view returns (address) {
        return address(system.lookup("Registry"));
    }

    function getGUACToken() public view returns (address) {
        return address(system.lookup("GUACToken"));
    }

    function getMemberNFT() public view returns (address) {
        return address(system.lookup("MemberNFT"));
    }
}

/*

import "./GUACToken.sol";
import "./MemberNFT.sol";
import "./Registry.sol";

import "./System.sol";

contract SystemConsumer {
    System internal system;

    constructor(address _System) public {
        system = System(_System);
    }

    // function inject(string contractName, address deployment) public {
    // }

    function getRegistry() public returns (Registry) {
        return Registry(system.lookup("Registry"));
    }

    function getGUACToken() public returns (GUACToken) {
        return GUACToken(system.lookup("GUACToken"));
    }

    function getMemberNFT() public returns (MemberNFT) {
        return MemberNFT(system.lookup("MemberNFT"));
    }
}
*/