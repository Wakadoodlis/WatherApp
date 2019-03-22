import { fromJS } from 'immutable';
import watherFormReducer from '../reducer';

describe('watherFormReducer', () => {
  it('returns the initial state', () => {
    expect(watherFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
