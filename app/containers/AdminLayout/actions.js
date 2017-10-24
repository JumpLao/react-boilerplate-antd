/*
 *
 * AdminLayout actions
 *
 */

import {
  DEFAULT_ACTION,
  TOGGLE_SIDEBAR_COLLAPSE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function toggleSidebarCollapse(collapse) {
  return {
    type: TOGGLE_SIDEBAR_COLLAPSE,
    collapse,
  };
}
