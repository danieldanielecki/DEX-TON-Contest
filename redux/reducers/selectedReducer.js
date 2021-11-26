
import {
  SET_CURRENCYAVAL,
  SET_CURRENCYBVAL,
  SET_EXCHANGEBUY,
  SET_EXCHANGESELL,
  SET_EXCHANGEAMOUNT,
  RESTORE_SELECTED
} from '../actions/selectedActions';

const initialState = {
  currencyA: {},
  currencyB: {},
  amount: Number,
  method: {}
}

const selected = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCYAVAL:
      return { ...state, currencyA: action.payload };
    case SET_CURRENCYBVAL:
      return { ...state, currencyB: action.payload };
    case SET_EXCHANGEBUY:
      return { ...state, method: { type: "buy" } };
    case SET_EXCHANGESELL:
      return { ...state, method: { type: "sell" } };
    case SET_EXCHANGEAMOUNT:
      return { ...state, amount: action.payload };
    case RESTORE_SELECTED:
      return { initialState };
    default:
      return { ...state };
  }
};

export default selected;