import { createSelector } from 'reselect';

/**
 * Direct selector to the usersLayout state domain
 */
const selectUsersLayoutDomain = (state) => state.get('usersLayout');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UsersLayout
 */

const makeSelectUsersLayout = () => createSelector(
  selectUsersLayoutDomain,
  (substate) => substate.toJS()
);

export default makeSelectUsersLayout;
export {
  selectUsersLayoutDomain,
};
