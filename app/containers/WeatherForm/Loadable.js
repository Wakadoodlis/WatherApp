/**
 *
 * Asynchronously loads the component for WeatherForm
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
