import { createSelector } from 'reselect';

/**
 * Direct selector to the dashboardPage state domain
 */
const selectDashboardPageDomain = (state) => state.get('dashboardPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DashboardPage
 */

const makeSelectDashboardPage = () => createSelector(
  selectDashboardPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectDashboardPage;
export {
  selectDashboardPageDomain,
};
