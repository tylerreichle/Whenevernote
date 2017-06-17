import React from 'react';
import { Route } from 'react-router-dom';

import Sidebar from '../sidebar/sidebar_container';
import NotebookShow from '../notebooks/notebook_show_container';
import NoteDetail from '../notes/note_detail_container';
import NewNotebook from '../notebooks/new_notebook_container';

export default class Notebooks extends React.Component {
  render() {
    if (this.props.location.pathname === '/notebook/new') {
      return <NewNotebook />;
    } else {
      return (
        <section className="notebooks">
          <Route path="/notebook" component={Sidebar} />
          <Route path="/notebook/:notebookId/notes" component={NotebookShow} />
          <Route path="/notebook/:notebookId/notes/:noteId" component={NoteDetail} />
        </section>
      );
    }
  }
}
