import { createSelector } from 'reselect';

/**
 * Direct selector to the signinForm state domain
 */
const selectSigninFormDomain = (state) => state.get('signinForm');

/**
 * Other specific selectors
 */
const selectAppDomain = (state) => state.get('app');

/**
 * Default selector used by SigninForm
 */

const makeSelectSigninForm = () => createSelector(
  selectSigninFormDomain,
  (substate) => substate.toJS()
);
const makeSelectAuth = () => createSelector(
  selectAppDomain,
  (substate) => substate.get('auth').toJS()
);
export default makeSelectSigninForm;
export {
  selectSigninFormDomain,
  makeSelectAuth,
};
