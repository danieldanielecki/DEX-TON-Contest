# Frontend of DEX with liquidity pools
![alt text](https://raw.githubusercontent.com/danieldanielecki/DEX-TON-Contest/master/public/example_page.png?token=ANAOK6SP2UPASK6KENZAYN3BUZOT2)

> This page allows users to create a pool, add or remove liquidity, browse through the pools, and exchange two tokens. It was created for the purposes of the competition posted here: https://github.com/newton-blockchain/TIPs/issues/42


**Tech Stack**

- Typescript
- React + Next
- Redux
- NodeJS v16 + Express (stubs)
- Bootstrap + Sass

## Getting Started

First, install the packages:
```bash
npm i
# or
yarn install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

## Description

Asynchronous calls to smart contracts have been mocked up.
We designed UI for exchanging one token for another token, a UI for creating a pool with two tokens, a UI for adding and removing liquidity from a pool, and a UI with a list of pools and pool statistics.

We used Typescript+React+Redux stack with some help from Bootstrap and Sass. Express was used to mock up our data.

When considering the design options, we focused on the ton.org site, the UI of standard wallets and bridge, and Responsive Web Design.

This application is rich in animation, uses brand styles, and has a minimalistic design in Telegram-like style. The only two external dependencies that we are using are 'react-table' and 'react-select'. Bootstraap was minimally used for spacing, alignment, and position (no pre-defined classes for the blocks of code).


## Brand assets

https://ton.org/brand-assets

## Personal Githubs

[`Kasia Janiszewska`](https://github.com/kappa3-3](https://github.com/kappa3-3 "kappa3-3").
[`Daniel Danielecki`](https://github.com/danieldanielecki](https://github.com/danieldanielecki "danieldanielecki").
