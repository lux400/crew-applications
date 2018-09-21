import './App.css';
import Dashboard from './containers/Dashboard';
import { Header } from './components/Header';
import * as React from 'react';
import { hot } from 'react-hot-loader';

const App = hot(module)(() => (
  <div className="App">
    <Header />
    <Dashboard component={Dashboard} />
  </div>
));
export default App;
