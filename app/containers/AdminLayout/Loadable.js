/**
 *
 * Asynchronously loads the component for AdminLayout
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
