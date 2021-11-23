// import currencies from '../stubs/currencies/currencies-list.json';
// import coins from '../stubs/coins/coins-list.json';

export default function getCurrenciesList() {
  return fetch('/simple/supported_vs_currencies')
    .then(res => res.json())
    .catch(error => error.message)
}

// const symbols = new Array();
// currencies.forEach(el => {
//   const coinFound = coins.find(coin => coin.symbol === el);
//   if (coinFound?.id) {
//     symbols.push(coinFound.id);
//   }
// })

// if(symbols.length > 1) {
//   return symbols.reduce((prev, cur) => prev?.concat(', ', cur)); 
// }
