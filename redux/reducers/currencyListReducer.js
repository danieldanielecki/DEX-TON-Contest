
import { FETCH_CURRENCIESLIST, FETCH_COINSLIST } from '../actions/currencyListAction';
import getCurrenciesList from '../../services/getCurrenciesList';
import getCoinsList from '../../services/getCoinsList';

const initialState = {
  currencyList: getCurrenciesList(),
  coinsList: getCoinsList(),
  currencies: []
}

const currencyList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIESLIST:
      return { ...state, currencyList: getCurrenciesList() };
    case FETCH_COINSLIST:
      return { ...state, coinsList: getCoinsList() };
    default:
      return { ...state };
  }
};

export default currencyList;