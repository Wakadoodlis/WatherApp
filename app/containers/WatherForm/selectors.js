import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the watherForm state domain
 */

const selectWatherFormDomain = state => state.get('watherForm', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by WatherForm
 */

const makeSelectWatherForm = () =>
  createSelector(selectWatherFormDomain, substate => substate.toJS());

export default makeSelectWatherForm;
export { selectWatherFormDomain };
