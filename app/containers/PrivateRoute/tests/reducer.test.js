
import { fromJS } from 'immutable';
import privateRouteReducer from '../reducer';

describe('privateRouteReducer', () => {
  it('returns the initial state', () => {
    expect(privateRouteReducer(undefined, {})).toEqual(fromJS({}));
  });
});
