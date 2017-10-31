/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from './constants';
const initialState = fromJS({
  auth: {
    token: false,
    expires: false,
    loading: false,
    error: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.setIn(['auth', 'error'], false).setIn(['auth', 'loading'], false);
    case LOGIN_REQUEST:
      return state.setIn(['auth', 'error'], false).setIn(['auth', 'loading'], true);
    case LOGIN_SUCCESS:
      return state.setIn(['auth', 'loading'], false).setIn(['auth', 'token'], action.result.token).setIn(['auth', 'expire'], action.result.expire);
    case LOGIN_FAIL:
      return state.setIn(['auth', 'loading'], false).setIn(['auth', 'error'], action.error);
    case LOGOUT:
      return state.setIn(['auth', 'token'], false).setIn(['auth', 'expires'], false);
    default:
      return state;
  }
}

export default appReducer;
