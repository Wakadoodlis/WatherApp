import { fromJS } from 'immutable';
import { SET_WATHER } from './constants';

export const initialState = fromJS({
  wather: {},
});

function watherFormReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WATHER:
      return state.set('wather', action.wather);
    default:
      return state;
  }
}

export default watherFormReducer;
