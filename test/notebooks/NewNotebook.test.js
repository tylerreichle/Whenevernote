import React from 'react'
import { shallow } from 'enzyme'

import NewNotebook from '../../src/components/notebooks/new_notebook'

describe('<NewNotebook />', () => {
  it('renders without crashing', () => {
    shallow(<NewNotebook />)
  })
})
