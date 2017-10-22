
import { fromJS } from 'immutable';
import errorPageReducer from '../reducer';

describe('errorPageReducer', () => {
  it('returns the initial state', () => {
    expect(errorPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
