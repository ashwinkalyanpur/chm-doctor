import React from 'react';
import 'typeface-roboto';
import './assets/style.res.css';
import './App.css';
import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Layout from './component/Layout/Layout';
import TabsDoctors from './component/Doctor/TabsDoctors';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
      <div>
        <Layout>
          <TabsDoctors />
        </Layout>
      </div>
    );
}


export default App;
