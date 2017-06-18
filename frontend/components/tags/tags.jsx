import React from 'react';
import { Route } from 'react-router-dom';

import Sidebar from '../sidebar/sidebar_container';
import TagShow from '../tags/tag_show_container';
import NoteDetail from '../notes/note_detail_container';
import NewTag from '../tags/new_tag_container';

export default class Tags extends React.Component {
  render() {
    if (this.props.location.pathname === '/tag/new') {
      return <NewTag />;
    } else {
      return (
        <section className="tags">
          <Route path="/tag" component={Sidebar} />
          <Route path="/tag/:tagId/notes" component={TagShow} />
          <Route path="/tag/:tagId/notes/:noteId" component={NoteDetail} />
        </section>
      );
    }
  }
}
