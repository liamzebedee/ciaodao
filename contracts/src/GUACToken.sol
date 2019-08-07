import "./lib/ERC20.sol";
import "./lib/ERC20Detailed.sol";
import "./SystemConsumer.sol";
import "./System.sol";

contract GUACToken is SystemConsumer, ERC20, ERC20Detailed {
    mapping(address => bool) canMint;
    mapping(address => bool) canBurn;

    bool _setup = false;

    constructor(
        System _System
    )
        SystemConsumer(_System)
        ERC20()
        ERC20Detailed("GUAC", "Guac", 18)
        public
    {
        return;
    }

    function setup() public {
        require(!_setup, "already setup");
        canMint[getMemberNFT()] = true;
        canBurn[getMemberNFT()] = true;

        // give founder 10M tokens
        _mint(0xb2fbcD12c58Ef05E22de310885B3635E5C5E8C14, 1000000*(10^18));
        _setup = true;
    }

    function mint(address account, uint256 amount) public returns (bool) {
        require(canMint[msg.sender], "unauthorised");
        _mint(account, amount);
        return true;
    }

    function burn(address account, uint256 amount) public returns (bool) {
        require(canBurn[msg.sender], "unauthorised");
        _burn(account, amount);
        return true;
    }
}