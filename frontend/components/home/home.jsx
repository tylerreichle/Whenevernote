import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute,
  ProtectedExactRoute
} from '../../util/route_util';

import SplashPage from './splash_page';
import Sidebar from '../sidebar/sidebar_container';
import NotesIndex from '../notes/notes_index_container';
import NoteDetail from '../notes/note_detail_container';
import NotebookShow from '../notebooks/notebook_show_container';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <AuthRoute path="/" component={SplashPage} />
        <ProtectedRoute path="/" component={Sidebar} />

        <Switch>
          <Route path="/notebook/:notebookId/" component={NotebookShow} />
          <Route path="/" component={NotesIndex} />
        </Switch>

        <Switch>
          <Route path="/notes/:noteId" component={NoteDetail} />
          <Route path="/notebook/:notebookId/notes/:noteId" component={NoteDetail} />
        </Switch>
      </div>
    );
  }
}

export default Home;

// inside home. switch to show note/nb index
