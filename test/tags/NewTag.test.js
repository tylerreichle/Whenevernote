import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import NewTag from '../../src/components/tags/new_tag_container'
import configureStore from '../../src/store/store'

describe('<NewTag />', () => {
  it('renders without crashing', () => {
    const store = configureStore()

    shallow(
      <Provider store={store}>
        <NewTag />
      </Provider>
    )
  })
})
