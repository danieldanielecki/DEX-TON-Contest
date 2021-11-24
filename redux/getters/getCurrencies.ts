import store from '../store';

export default async function getCurrencies() {
  // const currencyList = await store.getState().fetched.currencyList;
  // const coinsList = await store.getState().fetched.coinsList;
  // const prices = await store.getState().fetched.prices;
  const currencies = await store.getState().fetched.currencies;
  // const symbols: Array<Object> = [];

  // currencyList.forEach((currency: Object) => {
  //   const coinFound = coinsList.find((coin: {symbol: String}) => coin.symbol === currency);
  //   if (coinFound) {
  //     const coinExtra = { ...prices[coinFound.id], ...coinFound };
  //     symbols.push(coinExtra);
  //   }
  // })
  // const justSymbols = symbols.reduce((previousValue, currentValue) => previousValue.concat(currentValue.id, ','),'');
  console.log(store.getState().fetched.currencies);
  
  return currencies;
}