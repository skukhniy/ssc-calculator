import React from 'react';
import PropTypes from 'prop-types';
import { evaluate } from 'mathjs';

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

  const clearFunc = () => {
    setTotal(0);
    setDisplay(`${0}`);
  };

  const clearLast = () => {
    let newDisplay = display.slice(0, -1);
    if (newDisplay === '') {
      newDisplay = '0';
    }
    setDisplay(newDisplay);
  };

  // regex to check whether the last full number was positive or negative, then switch
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
    // makes sure that if the display only has 0, it is replaced by the sqrt func
    if (display === '0') {
      setDisplay(`${icon}(`);
    }
  };

  const parenthesisFunc = () => {
    const check = display.split(' ');
    // logic check ensures that the user can't have dangling parenthesis ex: 8) + 23
    if ((icon === ')' && check.at(-1).includes('(')) || icon === '(') {
      setDisplay(`${display}${icon}`);
    }
  };

  const decimalFunc = () => {
    const check = display.split(' ');
    // checks to make sure that there arent multiple decimals per number
    if (!check.at(-1).includes('.')) {
      setDisplay(`${display}${icon}`);
    }
  };

  const exponentFunc = () => {
    // test to stop exponent from being added to a non digit char
    if (/\d/g.test(display.slice(-1))) {
      setDisplay(`${display}^`);
    }
  };

  // throws the current equation on display into the mathjs evaulate func
  const equalsFunc = () => {
    if (!/\^/g.test(display.slice(-1))) {
      // temporarily replaces values that cause issues in the evaulate function
      let cleanedString = display.replaceAll('x', '*');
      cleanedString = cleanedString.replaceAll('÷', '/');
      cleanedString = cleanedString.replaceAll('√', 'sqrt');
      cleanedString = cleanedString.replaceAll('()', '');
      // use mathjs library to evaluate the string
      const evaluated = evaluate(cleanedString);
      setDisplay(`${evaluated}`);
      setTotal(evaluated);
    }
  };

  // Object which uses type names as keys, combined with corresponding function
  const funcList = {
    clear: clearFunc,
    'clear-last': clearLast,
    equals: equalsFunc,
    parenthesis: parenthesisFunc,
    decimal: decimalFunc,
    'sign-change': signChangeFunc,
    exponent: exponentFunc,
    sqrt: sqrtFunc,
  };

  const btnClick = () => {
    if (type === 'operator') {
      // check to stop two operators being side by side
      if (!/[x+÷-]/g.test(display.slice(-1))) {
        setDisplay(`${display} ${icon} `);
      }
    } else if (type in funcList) {
      // loop through function List to execute the correct func
      Object.keys(funcList).forEach((key) => {
        if (key === type) {
          funcList[key]();
        }
      });
    } else if (
      (type === 'number' && total !== 0 && !/\s/g.test(display)) ||
      display === '0'
    ) {
      // if you press a number after getting an answer, the display will start with the new number
      // or if the number on display is already 0, replace the 0 with the new number
      setDisplay(`${icon}`);
      setTotal(0);
    } else if (
      /\d/g.test(display.slice(-1)) ||
      /[x+÷-]/g.test(display.slice(-1))
    ) {
      // check if the last input was a number, the add this number to the current display/total
      // check if last input was an operator
      setDisplay(`${display}${icon}`);
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
