import React from 'react'
import { shallow } from 'enzyme'

import StyleButton from '../../src/components/notes/style_button'

describe('<StyleButton />', () => {
  it('renders without crashing', () => {
    const active = true
    const style = ''
    const title = ''
    const className = ''
    const onToggle = () => {}

    shallow(
      <StyleButton
        style={style}
        title={title}
        active={active}
        onToggle={onToggle}
        className={className}
      />
    )
  })
})
