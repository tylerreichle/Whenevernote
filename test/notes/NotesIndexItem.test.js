import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import NotesIndexItem from '../../src/components/notes/notes_index_item_container'
import configureStore from '../../src/store/store'

describe('<NotesIndexItem />', () => {
  it('renders without crashing', () => {
    const store = configureStore()

    shallow(
      <Provider store={store}>
        <NotesIndexItem />
      </Provider>
    )
  })
})
