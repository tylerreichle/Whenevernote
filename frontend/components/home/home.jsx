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

class Home extends React.Component {

  render() {
    return (
      <div className="home-container">
        <AuthRoute path="/" component={SplashPage} />
        <ProtectedExactRoute path="/" component={Sidebar} />
        <ProtectedExactRoute path="/" component={NotesIndex} />
        <ProtectedExactRoute path="/" component={NoteDetail} />
        <ProtectedRoute path="/note/new" component={NewNote} />
      </div>
    );
  }
}

export default Home;
