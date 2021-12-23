import fetched from "./fetchedReducer";
import selected from "./selectedReducer";
import pools from "./poolsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  fetched: fetched,
  selected: selected,
  pools,
});

export default rootReducer;
