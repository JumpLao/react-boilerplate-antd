
import { fromJS } from 'immutable';
import signinFormReducer from '../reducer';

describe('signinFormReducer', () => {
  it('returns the initial state', () => {
    expect(signinFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
