import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import TagsIndex from '../../src/components/tags/tags_index_container'
import configureStore from '../../src/store/store'

describe('<TagsIndex />', () => {
  it('renders without crashing', () => {
    const store = configureStore()

    shallow(
      <Provider store={store}>
        <TagsIndex />
      </Provider>
    )
  })
})
