import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const { total, next, operation } = state;
  const clickHandle = (e) => {
    const clickedBtn = e.target.innerText;
    const gotValue = calculate(state, clickedBtn);
    setState(gotValue);
  };

  return (
    <div className='CalcPage'>
      <h2>Let's do some math!</h2>
    <div className="MainBody">
      <div className="result">
        {total}
        {' '}
        {operation}
        {' '}
        {next}
      </div>
      <div className="num-symb">
        <button className="buttons" type="button" onClick={clickHandle}>AC</button>
        <button className="buttons" type="button" onClick={clickHandle}>+/-</button>
        <button className="buttons" type="button" onClick={clickHandle}>%</button>
        <button className="buttons operator" type="button" onClick={clickHandle}>÷</button>
      </div>
      <div className="num-symb">
        <button className="buttons" type="button" onClick={clickHandle}>7</button>
        <button className="buttons" type="button" onClick={clickHandle}>8</button>
        <button className="buttons" type="button" onClick={clickHandle}>9</button>
        <button className="buttons operator" type="button" onClick={clickHandle}>×</button>
      </div>
      <div className="num-symb">
        <button className="buttons" type="button" onClick={clickHandle}>4</button>
        <button className="buttons" type="button" onClick={clickHandle}>5</button>
        <button className="buttons" type="button" onClick={clickHandle}>6</button>
        <button className="buttons operator" type="button" onClick={clickHandle}>-</button>
      </div>
      <div className="num-symb">
        <button className="buttons" type="button" onClick={clickHandle}>1</button>
        <button className="buttons" type="button" onClick={clickHandle}>2</button>
        <button className="buttons" type="button" onClick={clickHandle}>3</button>
        <button className="buttons operator" type="button" onClick={clickHandle}>+</button>
      </div>
      <div className="num-symb">
        <button className="buttons" id="bigbtn" type="button" onClick={clickHandle}>0</button>
        <button className="buttons" type="button" onClick={clickHandle}>.</button>
        <button className="buttons operator" type="button" onClick={clickHandle}>=</button>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
