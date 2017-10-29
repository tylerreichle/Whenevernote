import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import Errors from '../../src/components/errors/errors'
import configureStore from '../../src/store/store'

describe('<Errors />', () => {
  it('renders without crashing', () => {
    const store = configureStore()

    shallow(
      <Provider store={store}>
        <Errors />
      </Provider>
    )
  })
})
