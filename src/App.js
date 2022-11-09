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
    ['%', 'percentage'],
    ['AC', 'clear'],
  ];
  const btnsRow2 = [
    [7, 'number'],
    [8, 'number'],
    [9, 'number'],
    ['/', 'operator'],
  ];
  const btnsRow3 = [
    [4, 'number'],
    [5, 'number'],
    [6, 'number'],
    ['x', 'operator'],
  ];
  const btnsRow4 = [
    [1, 'number'],
    [2, 'number'],
    [3, 'number'],
    ['-', 'operator'],
  ];
  const btnsRow5 = [
    [0, 'number'],
    ['.', 'decimal'],
    ['=', 'equals'],
    ['+', 'operator'],
  ];
  const btnRows = [btnsRow1, btnsRow2, btnsRow3, btnsRow4, btnsRow5];
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
