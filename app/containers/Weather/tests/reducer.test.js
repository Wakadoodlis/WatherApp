import { fromJS } from 'immutable';
import watherReducer from '../reducer';

describe('watherReducer', () => {
  it('returns the initial state', () => {
    expect(watherReducer(undefined, {})).toEqual(fromJS({}));
  });
});
