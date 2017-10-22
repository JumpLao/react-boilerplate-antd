
import { fromJS } from 'immutable';
import signupFormReducer from '../reducer';

describe('signupFormReducer', () => {
  it('returns the initial state', () => {
    expect(signupFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
