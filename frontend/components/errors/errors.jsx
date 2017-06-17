import React from 'react';

export default class Errors extends React.Component {
  render() {
    const errors = this.props.errors;

    return (
      <ul className="error-messages">
        { errors.map((error, idx) => (
          <div
            key={idx}
            onClick={this.dismissError}
            className="error-message"
          >
            <i className="fa fa-times-circle" />
            <li>{error}</li>
          </div>
        ))}
      </ul>
    );
  }
}
