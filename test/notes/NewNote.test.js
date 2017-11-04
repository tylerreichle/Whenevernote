import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import NewNote from '../../src/components/notes/new_note_container'
import configureStore from '../../src/store/store'

describe('<NewNote />', () => {
  it('renders without crashing', () => {
    const store = configureStore()

    shallow(
      <Provider store={store}>
        <NewNote />
      </Provider>
    )
  })
})
