ciaodao
=======

![](https://pbs.twimg.com/media/ECznUmhXoAA3Gua?format=jpg&name=large)

[\[video on twitter\]](https://twitter.com/liamzebedee/status/1165559180469686272)

Social spaces where only tokenholders can post.

Built at #ETHBerlinZwei.

#### Setup
1. Run a local blockchain using Ganache:

```sh
yarn global add ganache-cli
ganache-cli -p 8545
```

2. Deploy the contracts

```sh
cd fundao/
yarn
truffle migrate
```

3. Copy the addresses to the frontend

```sh
cd social/
yarn copy-contracts
```

4. Run the frontend

```sh
yarn dev
```

Make sure to connect Metamask to localhost:8545 (your local chain).

#### Structure
contracts - fundao/
dapp - frontend/
DAO data scraped from dapphub/aragon - datapop