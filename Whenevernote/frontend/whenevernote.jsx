import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;

  ReactDom.render(<Root store={store}/>, root);
});
