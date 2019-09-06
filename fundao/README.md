ciaodao contracts
=================

Spaces are token-curated social networks.

## Design rationale
Spaces are registered on the blockchain through the SpaceCadetFactory.

### Designing membership
Membership is based on a contract which implements IMembershipResolver. This is very simple to use - all it needs to do is answer the question - is this address, a member?

This can be implemented in numerous ways. To begin with, I've implemented two for the ERC20 and ERC721 token types. Membership is defined by literally having more than 0 of a token.

There is also an ERC721SpaceCadet, which is an example of a token created specifically for a making a space out of it. 

#### A moderation-based membership
This design is pretty powerful, as you can be really flexible with membership. For example, say you want to have a group, where the group can decide on which members are part of it.

 - Create a GroupToken contract
 - Issue tokens to invitees along the lines of ERC721SpaceCadet
 - "Removing" a member can be done via vote:
   - The token contract can have a custom "ban" function, which tallies votes on banning a member from tokenholders. If it passes a threshold, the member's balance is erased.
 - since the membership resolver uses balance, this means the member will no longer be shown in the space

#### Humans-only members
Another thing we can do is leverage [HumanityDAO](https://www.humanitydao.org) to only allow humans into the space. Keep in mind that the membership resolver is simply a function, so we can make spaces for specific tokens, that also require humanity (in the narrow sense of the word):

```sol
function isMember(address x) external returns (bool) {
  return HumanityRegistry.isHuman(x) && token.balanceOf(x) > 0;
}
```

#### Inviting with Merkle Airdrops
The membership function also doesn't dictate how you distribute tokens. It is thus possible to invite a large number of members using something like a Merkle Airdrop.