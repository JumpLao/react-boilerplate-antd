/**
 *
 * Asynchronously loads the component for PrivateRoute
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
