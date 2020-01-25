import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
 document.getElementById('root')
);

serviceWorker.unregister();
