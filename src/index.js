import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/logo.ico';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
