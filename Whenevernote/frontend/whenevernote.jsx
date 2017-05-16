import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;

  ReactDom.render(<h1>Whenevernote</h1>, root);
});
