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
            <CalcButton icon="(" setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon=")" setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon="%" setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon="AC" setTotal={setTotal} setDisplay={setDisplay} />
          </div>
          <div className="btn-row">
            <CalcButton icon="7" setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon="8" setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon="9" setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon="+" setTotal={setTotal} setDisplay={setDisplay} />
          </div>
          <div className="btn-row">
            <CalcButton icon="4" setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon="5" setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon="6" setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon="x" setTotal={setTotal} setDisplay={setDisplay} />
          </div>
          <div className="btn-row">
            <CalcButton icon="1" setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon="2" setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon="3" setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon="-" setTotal={setTotal} setDisplay={setDisplay} />
          </div>
          <div className="btn-row">
            <CalcButton icon="0" setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon="." setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon="=" setTotal={setTotal} setDisplay={setDisplay} />
            <CalcButton icon="+" setTotal={setTotal} setDisplay={setDisplay} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
