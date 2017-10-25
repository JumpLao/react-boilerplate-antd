import { createSelector } from 'reselect';

/**
 * Direct selector to the editUserPage state domain
 */
const selectEditUserPageDomain = (state) => state.get('editUserPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditUserPage
 */

const makeSelectEditUserPage = () => createSelector(
  selectEditUserPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectEditUserPage;
export {
  selectEditUserPageDomain,
};
