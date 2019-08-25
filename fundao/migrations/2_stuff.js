const SpaceCadetFactory = artifacts.require("SpaceCadetFactory");

module.exports = function(deployer) {
  deployer.deploy(SpaceCadetFactory);
};
