import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute,
  ProtectedExactRoute
} from '../util/route_util';

import Home from './home/home';
import NewNote from './notes/new_note_container';
import NewNotebook from './notebooks/new_notebook_container';

const App = () => (
  <Switch>
    <Route path="/note/new" component={NewNote} />
    <Route path="/notebook/new" component={NewNotebook} />
    <Route path="/" component={Home} />
  </Switch>
);

export default App;
