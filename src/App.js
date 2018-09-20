import Dashboard from './routes/dashboard';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Switch } from 'react-router';
import { DefaultLayout } from './containers/DefaultLayout';
import { DefaultRoutes } from './routes';

const App = hot(module)(() => (
  <Switch>
    {DefaultRoutes.map(({ path, exact, component, wrapper: Wrapper }) => (
      <Wrapper key={path} exact={exact} component={component} path={path} />
    ))}
    <DefaultLayout exact={true} path="/dashboard" component={Dashboard} />
    <Redirect from="/" to="/dashboard" />
  </Switch>
));
export default App;
