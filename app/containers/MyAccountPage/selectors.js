import { createSelector } from 'reselect';

/**
 * Direct selector to the myAccountPage state domain
 */
const selectMyAccountPageDomain = (state) => state.get('myAccountPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MyAccountPage
 */

const makeSelectMyAccountPage = () => createSelector(
  selectMyAccountPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectMyAccountPage;
export {
  selectMyAccountPageDomain,
};
