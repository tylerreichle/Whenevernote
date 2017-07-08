import React from 'react';
import PropTypes from 'prop-types';

function Errors(props) {
  if (props.errors) {
    return (
      <ul className="error-messages">
        {
          props.errors.map((error, idx) => (
            <div key={idx} className="error-message">
              <i className="fa fa-times-circle" />
              <li>{error}</li>
            </div>
          ))
        }
      </ul>
    );
  }
}

Errors.propTypes = {
  errors: PropTypes.arrayOf(String),
};
Errors.defaultProps = {
  errors: null,
};

export { Errors as default };
