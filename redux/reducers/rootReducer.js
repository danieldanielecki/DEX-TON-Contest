import currencyListReducer from './currencyListReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  fetched: currencyListReducer
});

export default rootReducer;