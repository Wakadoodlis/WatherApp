/**
 *
 * Asynchronously loads the component for Wather
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
