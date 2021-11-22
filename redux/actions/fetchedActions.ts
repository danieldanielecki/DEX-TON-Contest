//Action Types
export const FETCH_CURRENCIESLIST = "FETCH_CURRENCIESLIST";
export const FETCH_COINSLIST = "FETCH_COINSLIST";

//Action Creator
export const getCurrenciesList = () => ({
   type: FETCH_CURRENCIESLIST
});

export const getCoinsList = () => ({
   type: FETCH_COINSLIST
});
