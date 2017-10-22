
import { fromJS } from 'immutable';
import homeLayoutReducer from '../reducer';

describe('homeLayoutReducer', () => {
  it('returns the initial state', () => {
    expect(homeLayoutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
