import * as React from 'react';
import logo from '../assets/images/logo.png';

export const Header = () => {
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">OpenOceanStudio: Crew Applications</h1>
      </header>
    </React.Fragment>
  );
};
