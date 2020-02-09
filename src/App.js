import React from 'react';
import 'typeface-roboto';
import logo from './logo.ico';
import './App.css';
import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
