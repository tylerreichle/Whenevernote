import React from 'react'
import { shallow } from 'enzyme'

import NotebooksModal from '../../src/components/modals/notebooks_modal'

describe('<NotebooksModal />', () => {
  it('renders without crashing', () => {
    shallow(<NotebooksModal />)
  })
})
