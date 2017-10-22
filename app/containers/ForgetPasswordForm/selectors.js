import { createSelector } from 'reselect';

/**
 * Direct selector to the forgetPasswordForm state domain
 */
const selectForgetPasswordFormDomain = (state) => state.get('forgetPasswordForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ForgetPasswordForm
 */

const makeSelectForgetPasswordForm = () => createSelector(
  selectForgetPasswordFormDomain,
  (substate) => substate.toJS()
);

export default makeSelectForgetPasswordForm;
export {
  selectForgetPasswordFormDomain,
};
