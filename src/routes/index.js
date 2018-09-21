import { DefaultLayout } from '../containers/DefaultLayout';

import Dashboard from './dashboard/index';

export const DefaultRoutes = [
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
    wrapper: DefaultLayout,
  },
];
