import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Sidebar from '../sidebar/sidebar_container';
import NotebookShow from '../notebooks/notebook_show_container';
import NoteDetail from '../notes/note_detail_container';
import NewNotebook from '../notebooks/new_notebook_container';

const Notebooks = (props) => {
  if (props.location.pathname === '/notebook/new') {
    return <NewNotebook />;
  }
  return (
    <section className="notebooks">
      <Route path="/notebook" component={Sidebar} />
      <Route path="/notebook/:notebookId/notes" component={NotebookShow} />
      <Route path="/notebook/:notebookId/notes/:noteId" component={NoteDetail} />
    </section>
  );
};

Notebooks.propTypes = {
  location: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ).isRequired,
};

export default Notebooks;
