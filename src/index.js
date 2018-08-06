import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import './css/index.css';

import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import reducers from './reducers'

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'));

registerServiceWorker();
