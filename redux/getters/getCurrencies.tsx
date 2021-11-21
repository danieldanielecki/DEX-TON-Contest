import store from '../store';

export default async function getCurrencies() {
  const currencyList = await store.getState().fetched.currencyList;
  const coinsList = await store.getState().fetched.coinsList;
  const symbols: Array<Object> = [];

  currencyList.forEach((currency: Object) => {
    const coinFound = coinsList.find((coin: {symbol: String}) => coin.symbol === currency);
    if (coinFound) {
      symbols.push(coinFound);
    }
  })
  return symbols;
}