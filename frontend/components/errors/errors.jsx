import React from 'react';
import PropTypes from 'prop-types';

const Errors = props => (
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

Errors.propTypes = {
  errors: PropTypes.arrayOf(String),
};

Errors.defaultProps = {
  errors: null,
};

export default Errors;
