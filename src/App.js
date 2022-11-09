import './App.scss';
import React, { useState } from 'react';
import CalcButton from './components/CalcButton';
import OutputScn from './components/OutputScn';

function App() {
  const [total, setTotal] = useState(0);
  const [display, setDisplay] = useState('0');

  const btnsRow1 = [
    ['(', 'parenthesis'],
    [')', 'parenthesis'],
    ['C', 'clear'],
    ['AC', 'clear'],
    ['/', 'operator'],
  ];

  const btnsRow3 = [
    ['%', 'percentage'],
    [7, 'number'],
    [8, 'number'],
    [9, 'number'],
    ['x', 'operator'],
  ];
  const btnsRow4 = [
    ['xy', 'exponent'],
    [4, 'number'],
    [5, 'number'],
    [6, 'number'],
    ['-', 'operator'],
  ];
  const btnsRow5 = [
    ['√', 'pie'],
    [1, 'number'],
    [2, 'number'],
    [3, 'number'],
    ['+', 'operator'],
  ];
  const btnsRow6 = [
    ['+/-', 'sign-change'],
    [0, 'number'],
    ['.', 'decimal'],
    ['=', 'equals'],
  ];
  const btnRows = [btnsRow1, btnsRow3, btnsRow4, btnsRow5, btnsRow6];
  return (
    <div className="App">
      <div className="CalcContainer">
        <OutputScn display={display} />

        <div className="btn-container">
          {btnRows.map((row) => (
            <div className="btn-row">
              {row.map((btns) => (
                <CalcButton
                  icon={btns[0]}
                  type={btns[1]}
                  display={display}
                  total={total}
                  setTotal={setTotal}
                  setDisplay={setDisplay}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
