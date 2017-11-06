import React from 'react'
import { shallow } from 'enzyme'

import TagsIndexItem from '../../src/components/tags/tags_index_item'

describe('<TagsIndexItem />', () => {
  it('renders without crashing', () => {

    shallow(
      <TagsIndexItem />
    )
  })
})
