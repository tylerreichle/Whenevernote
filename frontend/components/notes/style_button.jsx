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
    let className = this.props.className + ' RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <i
        className={className}
        title={this.props.title}
        onClick={this.onToggle}
        aria-hidden="true"
      />
    );
  }
}

export default StyleButton;
