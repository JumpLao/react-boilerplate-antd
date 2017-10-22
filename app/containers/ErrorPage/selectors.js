import { createSelector } from 'reselect';

/**
 * Direct selector to the errorPage state domain
 */
const selectErrorPageDomain = (state) => state.get('errorPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ErrorPage
 */

const makeSelectErrorPage = () => createSelector(
  selectErrorPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectErrorPage;
export {
  selectErrorPageDomain,
};
