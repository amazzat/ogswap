# OgSwap - defi exchange based on UniSwap v1 Whitepaper

**smart-contracts** - hardhat application with contracts <br>
**www** - next.js application

There are only two smart contracts:
- Exchange
- Factory

Factory is router-like contract that keeps track of created exchanges (liquidity pools)

Exchange is contract that swaps Erc20 token to Eth. It uses uniswap v1's automated market maker (AMM). It uses own Erc20 token (**OGSWP**) to keep track of liqudity pool share. As pricing model we keep little share - 1% from users.

Made by Azamat Zulpykhar Azamat & Elaman Zholaman CS2005