
import { fromJS } from 'immutable';
import usersLayoutReducer from '../reducer';

describe('usersLayoutReducer', () => {
  it('returns the initial state', () => {
    expect(usersLayoutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
