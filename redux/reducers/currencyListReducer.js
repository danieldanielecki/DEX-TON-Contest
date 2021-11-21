
import { FETCH_CURRENCYLIST, FETCH_COINSLIST } from '../actions/currencyListAction';
import getCurrenciesList from '../../services/getCurrenciesList';
import getCoinsList from '../../services/getCoinsList';

const currencyList = (state = { currencyList: [], coinsList: [] }, action) => {
  switch (action.type) {
    case FETCH_CURRENCYLIST:
      return { ...state, currencyList: getCurrenciesList() };
    case FETCH_COINSLIST:
      return { ...state, coinsList: getCoinsList() };
    default:
      return { ...state };
  }
};

export default currencyList;