import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import TagShow from '../../src/components/tags/new_tag_container'
import configureStore from '../../src/store/store'

describe('<TagShow />', () => {
  it('renders without crashing', () => {
    const store = configureStore()

    shallow(
      <Provider store={store}>
        <TagShow />
      </Provider>
    )
  })
})
