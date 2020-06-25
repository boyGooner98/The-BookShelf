import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducers from './redux/reducers'
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes.js'
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);