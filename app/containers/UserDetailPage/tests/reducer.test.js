
import { fromJS } from 'immutable';
import userDetailPageReducer from '../reducer';

describe('userDetailPageReducer', () => {
  it('returns the initial state', () => {
    expect(userDetailPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
