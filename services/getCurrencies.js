import coins from "../stubs/coins.json";

// Here we had a call (https://github.com/danieldanielecki/DEX-TON-Contest/blob/82e32171c967242cfa8a361b74c873c5b5b2ab7c/services/getCurrencies.js) to our standalone Express server (https://github.com/danieldanielecki/DEX-TON-Contest/blob/82e32171c967242cfa8a361b74c873c5b5b2ab7c/ssr-server.js), but due to deployment issue we've simplified it. It's a perfect place to fetch your API to get the data you want.
export default function getCurrencies() {
  return coins;
}
