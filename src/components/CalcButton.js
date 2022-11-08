import React from 'react';
import PropTypes from 'prop-types';

export default function CalcButton({ icon }) {
  CalcButton.propTypes = {
    icon: PropTypes.string.isRequired,
  };
  return (
    <div className="calcBtn">
      <span>{icon}</span>
    </div>
  );
}
