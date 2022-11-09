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

  const signChangeFunc = () => {
    const checkArray = display.split(' ');
    let lastNum = checkArray.at(-1);
    if (/\d/g.test(lastNum)) {
      if (/-/g.test(lastNum)) {
        lastNum = lastNum.replace('-', '');
      } else {
        lastNum = `-${lastNum}`;
      }
      checkArray[checkArray.length - 1] = lastNum;
      const cleanedString = checkArray.join(' ');
      setDisplay(cleanedString);
    }
  };

  const sqrtFunc = () => {
    setDisplay(`${display}${icon}(`);
    if (display === '0') {
      setDisplay(`${icon}(`);
    }
  };

  const exponentFunc = () => {
    if (/\d/g.test(display.slice(-1))) {
      setDisplay(`${display}^`);
    }
  };

  // throws the current equation on display into the mathjs evaulate func
  const equalsFunc = () => {
    console.log(display);

    if (!/\^/g.test(display.slice(-1))) {
      // temporarily replaces values that cause issues in the evaulate function
      let cleanedString = display.replaceAll('x', '*');
      cleanedString = cleanedString.replaceAll('÷', '/');
      cleanedString = cleanedString.replaceAll('√', 'sqrt');
      const evaluated = evaluate(cleanedString);
      setDisplay(`${evaluated}`);
      setTotal(evaluated);
    }
  };

  const btnClick = () => {
    console.log('btnclick');
    console.log(display.slice(-1));
    const check = display.split(' ');
    // execute operator function
    if (type === 'operator') {
      setDisplay(`${display} ${icon}`);
      // if the display is only 0, replace with newly input icon
    } else if (type === 'clear') {
      console.log('Clear button pressed');
      clearFunc();
    } else if (type === 'clear-last') {
      let newDisplay = display.slice(0, -1);
      if (newDisplay === '') {
        newDisplay = '0';
      }
      setDisplay(newDisplay);
    } else if (type === 'equals') {
      console.log('EQUALS BUTTON PRESSED');
      equalsFunc();
      // if a number is entered after the equals button, it will replace the last answer
    } else if (type === 'decimal') {
      console.log('decimal');
      if (!check.at(-1).includes('.')) {
        setDisplay(`${display}${icon}`);
      }
      // if the last number is negative, change to positive & vice versa
    } else if (type === 'sign-change') {
      signChangeFunc(check);
    } else if (type === 'exponent') {
      exponentFunc();
    } else if (type === 'sqrt') {
      sqrtFunc();
    } else if (type === 'number' && total !== 0 && !/\s/g.test(display)) {
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
    } else if (/[x+÷-]/g.test(display.slice(-1))) {
      console.log('last input a operator');
      setDisplay(`${display} ${icon}`);
      // make sure you cant add two decimal points in one number
    } else {
      setDisplay(`${display}${icon}`);
    }
  };

  return (
    <div className={`calcBtn ${type}-color format-${icon}`} onClick={btnClick}>
      {icon === 'xy' ? (
        <span>
          x<sup>y</sup>
        </span>
      ) : (
        <span>{icon}</span>
      )}
    </div>
  );
}
