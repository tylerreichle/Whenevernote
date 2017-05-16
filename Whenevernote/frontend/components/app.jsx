import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionForm from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <h2>Whenevernote</h2>
    </header>

    <AuthRoute path="/signin" component={SessionForm} />
    <AuthRoute exact path="/" component={SessionForm} />
  </div>
);

export default App;
