import React from 'react';
import PropTypes from 'prop-types';

export default function CalcButton({ icon, setTotal, setDisplay }) {
  CalcButton.propTypes = {
    icon: PropTypes.string.isRequired,
    setTotal: PropTypes.func.isRequired,
    setDisplay: PropTypes.func.isRequired,
  };

  const btnClick = () => {
    setDisplay(icon);
  };

  return (
    <div className="calcBtn" onClick={btnClick}>
      <span>{icon}</span>
    </div>
  );
}
