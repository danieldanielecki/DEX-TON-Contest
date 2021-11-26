
import { SET_POOLS } from '../actions/poolsActions';

const initialState = {
  pools: {}
}

const selected = (state = initialState, action) => {
  switch (action.type) {
    case SET_POOLS:
      return { ...state, pools: action.value };
    default:
      return { ...state };
  }
};

export default selected;