import { createSelector } from 'reselect';

/**
 * Direct selector to the homeLayout state domain
 */
const selectHomeLayoutDomain = (state) => state.get('homeLayout');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HomeLayout
 */

const makeSelectHomeLayout = () => createSelector(
  selectHomeLayoutDomain,
  (substate) => substate.toJS()
);

export default makeSelectHomeLayout;
export {
  selectHomeLayoutDomain,
};
