import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import Sidebar from '../../src/components/sidebar/sidebar'
import configureStore from '../../src/store/store'

describe('<Sidebar />', () => {
  it('renders without crashing', () => {
    const store = configureStore()

    shallow(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    )
  })
})
