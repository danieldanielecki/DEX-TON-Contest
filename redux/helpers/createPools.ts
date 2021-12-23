import store from "../store";

export default async function createPools() {
  const currencies = await store.getState().fetched.currencies;
  const namesArray = currencies.map((currency: { symbol: string }) =>
    currency.symbol.toUpperCase()
  );

  // Generate random numbers for the pool statistics page.
  const allCombinations = namesArray.flatMap((symbol: string, index: number) =>
    namesArray.slice(index + 1).map((nextSymbol: string) => ({
      marketCap: Math.floor(Math.random() * (1000 - 1) + 1),
      pair: `${symbol}/${nextSymbol}`,
      priceChangePercentage24h: (
        Math.random() *
        29 *
        (Math.round(Math.random()) ? 1 : -1)
      ).toFixed(2),
      volume: Math.floor(Math.random() * (100 - 1) + 1),
    }))
  );
  // @ts-ignore
  return allCombinations.map((el: { id: number }, index: number) => {
    el.id = index;
    return el;
  });
}
