import React from 'react';
import PropTypes, { number } from 'prop-types';
import { evaluate } from 'mathjs';

export default function CalcButton({
  icon,
  setTotal,
  total,
  display,
  setDisplay,
  type,
  answer,
  setAnswer,
}) {
  CalcButton.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    total: PropTypes.number.isRequired,
    setTotal: PropTypes.func.isRequired,
    display: PropTypes.string.isRequired,
    setDisplay: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    answer: PropTypes.number.isRequired,
    setAnswer: PropTypes.func.isRequired,
  };

  const clearFunc = (operator) => {
    setTotal(0);
    setDisplay(`${0}`);
  };

  const equalsFunc = () => {
    const evaluated = evaluate(display.replace('x', '*'));
    setDisplay(`${evaluated}`);
    setAnswer(evaluated);
    setTotal(evaluated);
  };

  const btnClick = () => {
    console.log(answer);
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
    } else if (type === 'number' && answer !== 0 && !/\s/g.test(display)) {
      console.log('ANSWER REPLACED');
      setDisplay(`${icon}`);
      setAnswer(0);
      setTotal(0);
    } else if (display === '0') {
      setDisplay(`${icon}`);
      // check if the last input was a number, the add this number to the current display/total
    } else if (/\d/g.test(display.slice(-1))) {
      console.log(typeof number);
      setDisplay(`${display}${icon}`);
      setTotal();
      // check if last input was an operator
    } else if (!/\d/g.test(display.slice(-1))) {
      setDisplay(`${display} ${icon}`);
    }
  };

  return (
    <div className="calcBtn" onClick={btnClick}>
      <span>{icon}</span>
    </div>
  );
}
