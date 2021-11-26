export const SET_CURRENCYAVAL = "SET_CURRENCYAVAL";
export const SET_CURRENCYBVAL = "SET_CURRENCYBVAL";
export const SET_EXCHANGEBUY = "SET_EXCHANGEBUY";
export const SET_EXCHANGESELL = "SET_EXCHANGESELL";
export const SET_EXCHANGEAMOUNT = "SET_EXCHANGEAMOUNT";
export const RESTORE_SELECTED = "RESTORE_SELECTED";

export const setCurrencyA = (value: Object) => ({
   type: SET_CURRENCYAVAL,
   payload: value
});

export const setCurrencyB = (value: Object) => ({
   type: SET_CURRENCYBVAL,
   payload: value
});

export const setExchangeBuy = () => ({
   type: SET_EXCHANGEBUY
});

export const setExchangeSell = () => ({
   type: SET_EXCHANGESELL
});
export const setExchangeAmount = (value: Number) => ({
   type: SET_EXCHANGEAMOUNT,
   payload: value
});

export const clearSelected = () => ({
   type: RESTORE_SELECTED,
});