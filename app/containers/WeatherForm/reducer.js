import { fromJS } from 'immutable';
import { SET_WEATHER } from './constants';

export const initialState = fromJS({
  weather: {},
});

function weatherFormReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WEATHER:
      return state.set('weather', action.weather);
    default:
      return state;
  }
}

export default weatherFormReducer;
