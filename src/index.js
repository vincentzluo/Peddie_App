import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './Firebase';
import { FaRProject } from 'react-icons/fa';


render(
  <App />,
  document.getElementById('root'),
);


serviceWorker.unregister();