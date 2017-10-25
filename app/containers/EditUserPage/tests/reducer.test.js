
import { fromJS } from 'immutable';
import editUserPageReducer from '../reducer';

describe('editUserPageReducer', () => {
  it('returns the initial state', () => {
    expect(editUserPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
