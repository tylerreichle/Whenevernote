import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import NotebooksIndex from '../../src/components/notebooks/notebooks_index'
import configureStore from '../../src/store/store'

describe('<NotebooksIndex />', () => {
  it('renders without crashing', () => {
    const store = configureStore()

    shallow(
      <Provider store={store}>
        <NotebooksIndex />
      </Provider>
    )
  })
})
