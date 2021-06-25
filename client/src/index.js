import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.scss';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//Dev Tools
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);