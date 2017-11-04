import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class StyleButton extends Component {
  constructor(props) {
    super(props)

    this.onToggle = this.onToggle.bind(this)
  }

  onToggle(e) {
    e.preventDefault()
    this.props.onToggle(this.props.style)
  }

  render() {
    const { active, title } = this.props
    let className = `${this.props.className} RichEditor-styleButton`

    if (active) className += ' RichEditor-activeButton'

    return (
      <i
        title={title}
        aria-hidden="true"
        className={className}
        onClick={this.onToggle}
      />
    )
  }
}

StyleButton.propTypes = {
  active: PropTypes.bool.isRequired,
  style: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
}
