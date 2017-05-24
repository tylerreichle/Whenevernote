import React from 'react';

class StyleButton extends React.Component {
  constructor() {
    super();

    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onClick={this.onToggle}>
        {this.props.title}
      </span>
    );
  }
}

export default StyleButton;
