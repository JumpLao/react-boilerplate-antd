import { createSelector } from 'reselect';

/**
 * Direct selector to the userDetailPage state domain
 */
const selectUserDetailPageDomain = (state) => state.get('userDetailPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserDetailPage
 */

const makeSelectUserDetailPage = () => createSelector(
  selectUserDetailPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectUserDetailPage;
export {
  selectUserDetailPageDomain,
};
