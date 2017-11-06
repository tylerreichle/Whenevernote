import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import TagsSidebar from '../../src/components/sidebar/sidebar'
import configureStore from '../../src/store/store'

describe('<TagSidebar />', () => {
  it('renders without crashing', () => {
    const store = configureStore()

    shallow(
      <Provider store={store}>
        <TagsSidebar />
      </Provider>
    )
  })
})
