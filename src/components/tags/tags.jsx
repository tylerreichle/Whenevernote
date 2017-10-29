import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Sidebar from '../sidebar/sidebar'
import TagShow from '../tags/tag_show_container'
import NoteDetail from '../notes/note_detail_container'
import NewTag from '../tags/new_tag_container'

const Tags = (props) => {
  if (props.location.pathname === '/tag/new') {
    return <NewTag />
  }
  return (
    <section className="tags">
      <Route path="/tag" component={Sidebar} />
      <Route path="/tag/:tagId/notes" component={TagShow} />
      <Route path="/tag/:tagId/notes/:noteId" component={NoteDetail} />
    </section>
  )
}

Tags.propTypes = {
  location: PropTypes.object.isRequired
}

export default Tags
