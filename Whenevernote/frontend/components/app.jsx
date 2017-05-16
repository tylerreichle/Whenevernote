import React from 'react';
import { Route } from 'react-router-dom';
import SessionForm from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <h2>Whenevernote</h2>
    </header>

    <Route path="/signin" component={SessionForm} />
    <Route exact path="/" component={SessionForm} />
  </div>
);

export default App;
