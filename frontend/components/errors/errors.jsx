import React from 'react';

class Errors extends React.Component {

  render() {
    const errors = this.props.errors;
    let classname;
    if (errors.length === 0) {
      classname = 'hidden';
    } else {
      classname = 'validation';
    }

    return (
      <ul className={classname}>
        { errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    );
  }
}

export default Errors;
