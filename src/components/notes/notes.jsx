import React from 'react';
import { Route } from 'react-router-dom';

import Sidebar from '../sidebar/sidebar_container';
import NotesIndex from '../notes/notes_index_container';
import NoteDetail from '../notes/note_detail_container';
import NewNote from '../notes/new_note_container';

export default class Notes extends React.Component {
  render() {
    if (this.props.location.pathname === '/notes/new') {
      return <NewNote />;
    } else {
      return (
        <section className="notes">
          <Route path="/notes" component={Sidebar} />
          <Route path="/notes" component={NotesIndex} />
          <Route path="/notes/:noteId" component={NoteDetail} />
        </section>
      );
    }
  }
}
