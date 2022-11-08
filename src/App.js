import './App.scss';
import React, { useState } from 'react';
import CalcButton from './components/CalcButton';
import OutputScn from './components/OutputScn';

function App() {
  const [total, setTotal] = useState(0);
  const [display, setDisplay] = useState(0);

  return (
    <div className="App">
      <div className="CalcContainer">
        <OutputScn display={display} />
        <div className="btn-container">
          <div className="btn-row">
            <CalcButton icon="(" />
            <CalcButton icon=")" />
            <CalcButton icon="%" />
            <CalcButton icon="AC" />
          </div>
          <div className="btn-row">
            <CalcButton icon="7" />
            <CalcButton icon="8" />
            <CalcButton icon="9" />
            <CalcButton icon="+" />
          </div>
          <div className="btn-row">
            <CalcButton icon="4" />
            <CalcButton icon="5" />
            <CalcButton icon="6" />
            <CalcButton icon="x" />
          </div>
          <div className="btn-row">
            <CalcButton icon="1" />
            <CalcButton icon="2" />
            <CalcButton icon="3" />
            <CalcButton icon="-" />
          </div>
          <div className="btn-row">
            <CalcButton icon="0" />
            <CalcButton icon="." />
            <CalcButton icon="=" />
            <CalcButton icon="+" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
