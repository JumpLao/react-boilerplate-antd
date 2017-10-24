/*
 *
 * AdminLayout reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  TOGGLE_SIDEBAR_COLLAPSE,
} from './constants';

const initialState = fromJS({
  sidebar: {
    collapse: false,
  },
});

function adminLayoutReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case TOGGLE_SIDEBAR_COLLAPSE:
      return state.setIn(['sidebar', 'collapse'], action.collapse);
    default:
      return state;
  }
}

export default adminLayoutReducer;
