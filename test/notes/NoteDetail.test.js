import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import NoteDetail from '../../src/components/notes/new_note_container'
import configureStore from '../../src/store/store'

describe('<NoteDetail />', () => {
  it('renders without crashing', () => {
    const store = configureStore()

    shallow(
      <Provider store={store}>
        <NoteDetail />
      </Provider>
    )
  })
})
