/**
 *
 * Asynchronously loads the component for MyAccountPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
