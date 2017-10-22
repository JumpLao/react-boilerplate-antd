
import { fromJS } from 'immutable';
import forgetPasswordFormReducer from '../reducer';

describe('forgetPasswordFormReducer', () => {
  it('returns the initial state', () => {
    expect(forgetPasswordFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
