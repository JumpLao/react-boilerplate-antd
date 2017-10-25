/**
 *
 * Asynchronously loads the component for EditUserPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
