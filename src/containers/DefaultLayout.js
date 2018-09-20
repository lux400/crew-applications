import { Route } from 'react-router';
import * as React from 'react';
import { Header } from '../components/Header';
import '../App.css';

export const DefaultLayout = ({ component: Component, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      render={(matchProps) => (
        <div className="App">
          <Header />
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};
