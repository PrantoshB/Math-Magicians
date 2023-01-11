import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandle = (e) => {
    const clickedBtn = e.target.innerText;
    const Result = calculate(this.state, clickedBtn);
    this.setState(Result);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="MainBody">
        <div className="result">
          {total}
          {operation}
          {next}
        </div>
        <div className="num-symb">
          <button className="buttons" type="button" onClick={this.clickHandle}>AC</button>
          <button className="buttons" type="button" onClick={this.clickHandle}>+/-</button>
          <button className="buttons" type="button" onClick={this.clickHandle}>%</button>
          <button className="buttons operator" type="button" onClick={this.clickHandle}>÷</button>
        </div>
        <div className="num-symb">
          <button className="buttons" type="button" onClick={this.clickHandle}>7</button>
          <button className="buttons" type="button" onClick={this.clickHandle}>8</button>
          <button className="buttons" type="button" onClick={this.clickHandle}>9</button>
          <button className="buttons operator" type="button" onClick={this.clickHandle}>×</button>
        </div>
        <div className="num-symb">
          <button className="buttons" type="button" onClick={this.clickHandle}>4</button>
          <button className="buttons" type="button" onClick={this.clickHandle}>5</button>
          <button className="buttons" type="button" onClick={this.clickHandle}>6</button>
          <button className="buttons operator" type="button" onClick={this.clickHandle}>-</button>
        </div>
        <div className="num-symb">
          <button className="buttons" type="button" onClick={this.clickHandle}>1</button>
          <button className="buttons" type="button" onClick={this.clickHandle}>2</button>
          <button className="buttons" type="button" onClick={this.clickHandle}>3</button>
          <button className="buttons operator" type="button" onClick={this.clickHandle}>+</button>
        </div>
        <div className="num-symb">
          <button className="buttons" id="bigbtn" type="button" onClick={this.clickHandle}>0</button>
          <button className="buttons" type="button" onClick={this.clickHandle}>.</button>
          <button className="buttons operator" type="button" onClick={this.clickHandle}>=</button>
        </div>
      </div>

    );
  }
}

export default Calculator;
