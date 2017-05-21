import React from 'react';
import {
  AuthRoute,
  ProtectedRoute,
  ProtectedExactRoute
} from '../../util/route_util';

import SplashPage from './splash_page';
import Sidebar from '../sidebar/sidebar_container';
import NotesIndex from '../notes/notes_index_container';
import NoteDetail from '../notes/note_detail_container';
import NewNote from '../notes/new_note_container';
import NewNotebook from '../notebooks/new_notebook_container';

class Home extends React.Component {

  render() {
    return (
      <div className="home-container">
        <AuthRoute path="/" component={SplashPage} />
        <ProtectedRoute path="/" component={Sidebar} />
        <ProtectedRoute path="/" component={NotesIndex} />
        <ProtectedRoute path="/notes/:noteId" component={NoteDetail} />
        <ProtectedRoute path="/note/new" component={NewNote} />
        <ProtectedRoute path="/notebook/new" component={NewNotebook} />
      </div>
    );
  }
}

export default Home;
