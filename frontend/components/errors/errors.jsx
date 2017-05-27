import React from 'react';

class Errors extends React.Component {
  constructor(props) {
    super(props);

    this.dismissError = this.dismissError.bind(this);
  }

  dismissError(e) {
    console.log(e.target);
    $(`${e.target.classname}`).addclass('hidden');
  }

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
            <i className="fa fa-times-circle"/>
            <li>{error}</li>
          </div>
        ))}
      </ul>
    );
  }
}

export default Errors;
