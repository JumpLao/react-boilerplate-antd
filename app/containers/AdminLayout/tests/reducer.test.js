
import { fromJS } from 'immutable';
import adminLayoutReducer from '../reducer';

describe('adminLayoutReducer', () => {
  it('returns the initial state', () => {
    expect(adminLayoutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
