import React from 'react';

class Errors extends React.Component {
  render() {
    const errors = this.props.errors;

    return (
      <ul className="errors">
        { errors.map(error => (
          <li>{error}</li>
        ))}
      </ul>
    );
  }
}

export default Errors;
