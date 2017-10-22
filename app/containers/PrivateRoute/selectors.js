import { createSelector } from 'reselect';

/**
 * Direct selector to the privateRoute state domain
 */
const selectPrivateRouteDomain = (state) => state.get('privateRoute');

/**
 * Other specific selectors
 */
const selectAppDomain = (state) => state.get('app');

/**
 * Default selector used by PrivateRoute
 */

const makeSelectPrivateRoute = () => createSelector(
  selectPrivateRouteDomain,
  (substate) => substate.toJS()
);
const makeSelectAuth = () => createSelector(
  selectAppDomain,
  (substate) => substate.get('auth').toJS()
);

export default makeSelectPrivateRoute;
export {
  selectPrivateRouteDomain,
  makeSelectAuth,
};
