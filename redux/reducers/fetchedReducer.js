
import { FETCH_CRYPTO } from '../actions/fetchedActions';
import getCurrencies from '../../services/getCurrencies';

const initialState = {
  currencies: getCurrencies(),
}

const fetched = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRYPTO:
      return { ...state, currencies: getCurrencies()};
    default:
      return { ...state };
  }
};

export default fetched;