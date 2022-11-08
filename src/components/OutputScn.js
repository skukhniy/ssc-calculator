import React from 'react';
import PropTypes from 'prop-types';

export default function OutputScn({ display }) {
  OutputScn.propTypes = {
    display: PropTypes.string.isRequired,
  };
  return (
    <div className="OutputScn">
      <div className="display">
        <span>{display}</span>
      </div>
    </div>
  );
}
