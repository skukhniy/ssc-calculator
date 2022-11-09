import React from 'react';
import PropTypes, { number } from 'prop-types';
import { e, evaluate } from 'mathjs';

export default function CalcButton({
  icon,
  setTotal,
  total,
  display,
  setDisplay,
  type,
}) {
  CalcButton.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    total: PropTypes.number.isRequired,
    setTotal: PropTypes.func.isRequired,
    display: PropTypes.string.isRequired,
    setDisplay: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
  };

  const clearFunc = (operator) => {
    setTotal(0);
    setDisplay(`${0}`);
  };

  const equalsFunc = () => {
    console.log(display);
    const evaluated = evaluate(display.replaceAll('x', '*'));
    setDisplay(`${evaluated}`);
    setTotal(evaluated);
  };

  const btnClick = () => {
    // execute operator function
    if (type === 'operator') {
      setDisplay(`${display} ${icon}`);
      // if the display is only 0, replace with newly input icon
    } else if (type === 'clear') {
      console.log('Clear button pressed');
      clearFunc();
    } else if (type === 'equals') {
      console.log('EQUALS BUTTON PRESSED');
      equalsFunc();
      // if a number is entered after the equals button, it will replace the last answer
    } else if (type === 'number' && total !== 0 && !/\s/g.test(display)) {
      console.log(total);
      console.log('ANSWER REPLACED');
      setDisplay(`${icon}`);
      setTotal(0);
    } else if (display === '0') {
      console.log('display === 0');
      setDisplay(`${icon}`);
      // check if the last input was a number, the add this number to the current display/total
    } else if (/\d/g.test(display.slice(-1))) {
      console.log(typeof number);
      console.log(display.slice(-1));
      setDisplay(`${display}${icon}`);
      // check if last input was an operator
    } else if (/[x+/-]/g.test(display.slice(-1))) {
      console.log(display);
      console.log(display.slice(-1));
      console.log('last input a operator');
      setDisplay(`${display} ${icon}`);
    } else {
      console.log('reached end of if loops');
      setDisplay(`${display}${icon}`);
    }
  };

  return (
    <div className="calcBtn" onClick={btnClick}>
      <span>{icon}</span>
    </div>
  );
}
