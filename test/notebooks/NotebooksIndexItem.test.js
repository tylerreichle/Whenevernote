import React from 'react'
import { shallow } from 'enzyme'

import NotebooksIndexItem from '../../src/components/notebooks/notebooks_index_item'

describe('<NotebooksIndexItem />', () => {
  it('renders without crashing', () => {
    shallow(<NotebooksIndexItem />)
  })
})
