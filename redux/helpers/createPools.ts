import store from '../store';

export default async function createPools() {
  const currencies = await store.getState().fetched.currencies;
  const namesArray = currencies.map((currency: { symbol: string }) => currency.symbol.toUpperCase());
  const allCombinations = namesArray.flatMap(
    (symbol: string, index: number) => namesArray.slice(index + 1).map((nextSymbol: string, mapIndex: number) => ({
      marketCap: Math.floor(Math.random() * (1000 - 1) + 1),
      pair: `${symbol}/${nextSymbol}`,
      priceChangePercentage24h: Math.random() * (20 - 1) + 1,
      volume: Math.floor(Math.random() * (100 - 1) + 1),
    }))
  );
  return allCombinations.map((el: {id: number}, index: number) => {
    el.id = index;
    return el;
  })
}