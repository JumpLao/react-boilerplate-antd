import { createSelector } from 'reselect';

/**
 * Direct selector to the adminLayout state domain
 */
const selectAdminLayoutDomain = (state) => state.get('adminLayout');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AdminLayout
 */

const makeSelectAdminLayout = () => createSelector(
  selectAdminLayoutDomain,
  (substate) => substate.toJS()
);

export default makeSelectAdminLayout;
export {
  selectAdminLayoutDomain,
};
