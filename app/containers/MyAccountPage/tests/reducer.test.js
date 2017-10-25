
import { fromJS } from 'immutable';
import myAccountPageReducer from '../reducer';

describe('myAccountPageReducer', () => {
  it('returns the initial state', () => {
    expect(myAccountPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
