import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;

  const root = document.getElementById('root');
  ReactDom.render(<Root store={store}/>, root);
});

import { signout } from './actions/session_actions';
window.signout = signout;



import * as NoteAPI from './actions/notes_actions';
window.fetchNotes = NoteAPI.fetchNotes;
window.fetchSingleNote = NoteAPI.fetchSingleNote;
window.createNote = NoteAPI.createNote;
window.updateNote = NoteAPI.updateNote;
window.deleteNote = NoteAPI.deleteNote;
