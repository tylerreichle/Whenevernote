import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import NotesIndex from '../../src/components/notes/notes_index_container'
import configureStore from '../../src/store/store'

describe('<NotesIndex />', () => {
  it('renders without crashing', () => {
    const store = configureStore()

    shallow(
      <Provider store={store}>
        <NotesIndex />
      </Provider>
    )
  })
})
