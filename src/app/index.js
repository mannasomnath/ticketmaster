import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import eventsSagas from './sagas'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import App from './App'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
    
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// run the saga
sagaMiddleware.run(eventsSagas);

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
