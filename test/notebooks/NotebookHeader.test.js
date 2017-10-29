import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import NotebookHeader from '../../src/components/notebooks/notebook_header_container'
import configureStore from '../../src/store/store'

describe('<NotebookHeader />', () => {
  it('renders without crashing', () => {
    const store = configureStore()

    shallow(
      <Provider store={store}>
        <NotebookHeader />
      </Provider>
    )
  })
})
