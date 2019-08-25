pragma solidity ^0.5.10;
contract TopicManager {

    struct Config {
        bool members;
        address owner;
    }

    mapping(bytes32 => Config) public configs;
    string[] public topics;

    function claimTopic(string memory topic, bool members) public {
        bytes32 topicHash = sha256(abi.encode(topic));
        Config memory config = configs[topicHash];
        require(config.owner == address(0x0), "Topic already claimed");
        config.members = members;
        config.owner = msg.sender;
        configs[topicHash] = config;
        topics.push(topic);
    }

    function getMembers(string memory topic) public view returns (bool) {
        Config memory config = configs[sha256(abi.encode(topic))];
        return config.members;
    }

    function getOwner(string memory topic) public view returns (address) {
        Config memory config = configs[sha256(abi.encode(topic))];
        return config.owner;
    }

    function numTopics() public view returns (uint) {
      return topics.length;
    }
}

