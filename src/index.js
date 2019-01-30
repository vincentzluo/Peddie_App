import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
<<<<<<< HEAD
import Board from './Board';
import Question from './Question';
=======
>>>>>>> 617bf00f5921e0b9e54bd53167d54eb3c73d4f41
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './Firebase';

<<<<<<< HEAD
ReactDOM.render(<Board/>, document.getElementById('root'));
=======
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
>>>>>>> 617bf00f5921e0b9e54bd53167d54eb3c73d4f41

serviceWorker.unregister();