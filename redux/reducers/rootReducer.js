import fetched from './fetchedReducer';
import selected from './selectedReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  fetched: fetched,
  selected: selected,
});

export default rootReducer;