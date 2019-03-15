import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the wather state domain
 */

const selectWatherDomain = state => state.get('wather', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Wather
 */

const makeSelectWather = () =>
  createSelector(selectWatherDomain, substate => substate.toJS());

export default makeSelectWather;
export { selectWatherDomain };
