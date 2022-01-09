# Frontend of DEX with liquidity pools

![alt text](https://raw.githubusercontent.com/danieldanielecki/DEX-TON-Contest/master/public/example_page.png?token=ANAOK6SP2UPASK6KENZAYN3BUZOT2)

> This page allows users to create a pool, add or remove liquidity, browse through the pools, and exchange two tokens. It was created for the purposes of the competition posted here: https://github.com/newton-blockchain/TIPs/issues/42

**Tech Stack**

- `TypeScript`
- `React` + `Next.js`
- `Redux`
- `Node.js` v16 (**important, otherwise `replaceAll` might complain from `HeadPage.tsx`)** + `Express` (for pseudorandom numbers generators stubs to pools and coins)
- `Bootstrap` + `Sass`

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

We used `TypeScript` + `React` + `Redux` stack with some help from `Bootstrap` and `Sass`. `Express` was used to mock up our data.

When considering the design options, we focused on the ton.org site, the UI of standard wallets and bridge, and Responsive Web Design (RWD).

This application is rich in animation, uses brand styles, and has a minimalistic design in `Telegram`-like style. The only two external dependencies that we are using are `react-table` and `react-select`. `Bootstraap` was minimally used for spacing, alignment, and position (no pre-defined classes for the blocks of code). We've tried to used as much as possible pure `CSS` for many animations. We've used `localStorage` for keeping user's preferred Light/Dark theme.

## Final Release

Please use the version [`v1.0.0`](https://github.com/danieldanielecki/DEX-TON-Contest/releases/tag/v1.0.0) for testing & review. Please ignore commits after that tag for contest-purposes. The extra contribution is solely due to our ambition to improve the project.

### Post-submisstions improvements

- [`v1.1.0`](https://github.com/danieldanielecki/DEX-TON-Contest/releases/tag/v1.1.0) - Animated Search of Pools
- [`v1.2.0`](https://github.com/danieldanielecki/DEX-TON-Contest/releases/tag/v1.2.0) - Dark/Light theme toggle, including system preference, and saving user's preferences using `localStorage`
- [`v1.2.1`](https://github.com/danieldanielecki/DEX-TON-Contest/releases/tag/v1.2.1) - Deployment to https://dex-ton-contest.vercel.app
- Other minor improvements: `BaseCard` "jumping" fix, Code Quality, console warnings, and RWD.

### Possible improvements

- `ToggleBuySellSwitch` - styling on Dark Theme
- `BaseTooltip` - styling & broken animation on Dark Theme, as well as RWD
- Liquidity from Pool - settings' icon on Dark Theme
- Select option items on Dark Theme - hover effect
- Accessibility plugin, such as [Agastya](https://oswaldlabs.com/platform/agastya/)
- `GlobalFilter` - center on mobile

## Brand assets

https://ton.org/brand-assets

## Personal Githubs

[`Kasia Janiszewska`](https://github.com/kappa3-3 "kappa3-3").
[`Daniel Danielecki`](https://github.com/danieldanielecki "danieldanielecki").
