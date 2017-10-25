/**
 *
 * Asynchronously loads the component for UsersLayout
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
