import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import Notes from '../../src/components/notes/notes'
import configureStore from '../../src/store/store'

describe('<Notes />', () => {
  it('renders without crashing', () => {
    const store = configureStore()
    const location = {}

    shallow(
      <Provider store={store}>
        <Notes location={location} />
      </Provider>
    )
  })
})
