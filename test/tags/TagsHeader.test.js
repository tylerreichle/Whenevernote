import React from 'react'
import { shallow } from 'enzyme'

import TagsHeader from '../../src/components/tags/tags_header'

describe('<TagsHeader />', () => {
  it('renders without crashing', () => {
    const tags = []
    const noteId = 1

    shallow(
      <TagsHeader
        tags={tags}
        noteId={noteId}
      />
    )
  })
})
