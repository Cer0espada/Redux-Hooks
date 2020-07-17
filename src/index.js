import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';

import allReducers from './reducers';
import App from './components/App';

const logger = createLogger({
  collapsed: true
});

const store = createStore(allReducers, undefined, composeWithDevTools(applyMiddleware(thunk, logger)))


const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>
  , rootElement);
