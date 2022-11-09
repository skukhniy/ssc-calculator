import React from 'react';
import PropTypes from 'prop-types';

export default function OutputScn({ display }) {
  OutputScn.propTypes = {
    display: PropTypes.string.isRequired,
  };

  // adjusts display to display exponents as a small number instead of using ^
  const expoRegex = /\^\d+/g;
  const replaceRegex = /(?<=\^)\d+/g;
  const cleanedDisplay = display.replaceAll(
    expoRegex,
    // eslint-disable-next-line comma-dangle
    `<sup>${replaceRegex}</sup>`
  );

  return (
    <div className="OutputScn">
      <div className={display.length > 16 ? 'display-tiny' : 'display'}>
        <span>{display}</span>
      </div>
    </div>
  );
}
