import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import reducer from './reducers';
import App from './components/App';

const store = createStore(reducer);
ReactDOM.render(<App />,
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
