import React from 'react'
import { shallow } from 'enzyme'

import DeleteConfirmation from '../../src/components/modals/delete_confirmation'

describe('<DeleteConfirmation />', () => {
  it('renders without crashing', () => {
    shallow(<DeleteConfirmation />)
  })
})
