import React from 'react'
import { shallow } from 'enzyme'

import NoteInfo from '../../src/components/modals/note_info'

describe('<NoteInfo />', () => {
  it('renders without crashing', () => {
    shallow(
      <NoteInfo
        title={'test'}
        createdAt={'test'}
        updatedAt={'test'}
      />
    )
  })
})
