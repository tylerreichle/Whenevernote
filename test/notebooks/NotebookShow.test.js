import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import NotebookShow from '../../src/components/notebooks/notebook_show'
import configureStore from '../../src/store/store'

describe('<NotebookShow />', () => {
  it('renders without crashing', () => {
    const store = configureStore()

    shallow(
      <Provider store={store}>
        <NotebookShow />
      </Provider>
    )
  })
})
