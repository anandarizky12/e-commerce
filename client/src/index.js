import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store}  from './store';
import {Provider as ProviderRedux } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <ProviderRedux store={store}>
      <App />
    </ProviderRedux>
  </React.StrictMode>,
  document.getElementById('root')
);

