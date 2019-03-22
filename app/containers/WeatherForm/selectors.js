import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the weatherForm state domain
 */

const selectWeatherFormDomain = state => state.get('weatherForm', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by WeatherForm
 */

const makeSelectWeatherForm = () =>
  createSelector(selectWeatherFormDomain, substate => substate.toJS());

export default makeSelectWeatherForm;
export { selectWeatherFormDomain };
