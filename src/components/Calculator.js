import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="MainBody">
        <div className="result">0</div>
        <div className="num-symb">
          <button className="buttons" type="button">AC</button>
          <button className="buttons" type="button">+/-</button>
          <button className="buttons" type="button">%</button>
          <button className="buttons operator" type="button">÷</button>
        </div>
        <div className="num-symb">
          <button className="buttons" type="button">7</button>
          <button className="buttons" type="button">8</button>
          <button className="buttons" type="button">9</button>
          <button className="buttons operator" type="button">×</button>
        </div>
        <div className="num-symb">
          <button className="buttons" type="button">4</button>
          <button className="buttons" type="button">5</button>
          <button className="buttons" type="button">6</button>
          <button className="buttons operator" type="button">-</button>
        </div>
        <div className="num-symb">
          <button className="buttons" type="button">1</button>
          <button className="buttons" type="button">2</button>
          <button className="buttons" type="button">3</button>
          <button className="buttons operator" type="button">+</button>
        </div>
        <div className="num-symb">
          <button className="buttons" id="bigbtn" type="button">0</button>
          <button className="buttons" type="button">.</button>
          <button className="buttons operator" type="button">=</button>
        </div>
      </div>

    );
  }
}

export default Calculator;
