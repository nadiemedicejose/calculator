import React, { Component } from 'react'
import CalculatorDisplay from './calculator/CalculatorDisplay';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      current: '0',
      total: '',
    }

    this.handleButton = this.handleButton.bind(this);
  }

  // Reset the display's values 
  handleClear() {
    this.setState({
      current: '0',
      total: '',
    })
  }

  // Compute the total
  handleComputation() {
    const { current, total } = this.state;
    if(!/[+\-*/]/.test(current[current.length -1])) {
      this.setState({
        current:  Math.round(eval(`${total}${current}`) * 10000) / 10000,
        total: '',
      })
    }
  }

  // Insert the operator
  handleOperator(operator) {
    const { current, total } = this.state;
    if(/[+\-*/]/.test(current)) {
      if(/[+\-*/]/.test(current[current.length -1])) {
        if(operator !== '-') {
          this.setState({
            current: operator,
          })
        } else if(!/-/.test(current)) {
          this.setState({
            current: `${current}${operator}`
          })
        }
      } else {
        this.setState({
          current: operator,
          total: Math.round(eval(`${total}${current}`) * 10000) / 10000,
        })
      }
    } else {
      this.setState({
        current: operator,
        total: current,
      })
    }
  }

  handleDigit(digit) {
    const { current } = this.state;
    this.setState({
      current: current !== '0' ? `${current}${digit}` : digit,
    })
  }

  handleDecimal() {
    const { current } = this.state;
    if(!/\./.test(current)) {
      this.setState({
        current: `${current}.`
      })
    }
  }

  handleButton(e) {
    const {textContent: value} = e.target;

    switch(value) {
      case 'AC':
        this.handleClear();
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.handleDigit(value);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        this.handleOperator(value);
        break;
      case '=':
        this.handleComputation();
        break;
      case '.':
        this.handleDecimal();
        break;
      default:
        console.error('Technically, this should never happen.');
    }
  }

  render() {
    const { current, total } = this.state;
    const { handleButton } = this;

    return (
      <div id='calculator'>
        <CalculatorDisplay current={current} total={total} />
        <div id='equals' className='item' onClick={handleButton}>=</div>
        <div id='seven' className='item' onClick={handleButton}>7</div>
        <div id='eight' className='item' onClick={handleButton}>8</div>
        <div id='nine' className='item' onClick={handleButton}>9</div>
        <div id='four' className='item' onClick={handleButton}>4</div>
        <div id='five' className='item' onClick={handleButton}>5</div>
        <div id='six' className='item' onClick={handleButton}>6</div>
        <div id='one' className='item' onClick={handleButton}>1</div>
        <div id='two' className='item' onClick={handleButton}>2</div>
        <div id='three' className='item' onClick={handleButton}>3</div>
        <div id='zero' className='item' onClick={handleButton}>0</div>
        <div id='add' className='item operator' onClick={handleButton}>+</div>
        <div id='subtract' className='item operator' onClick={handleButton}>-</div>
        <div id='multiply' className='item operator' onClick={handleButton}>*</div>
        <div id='divide' className='item operator' onClick={handleButton}>/</div>
        <div id='decimal' className='item' onClick={handleButton}>.</div>
        <div id='clear' className='item' onClick={handleButton}>AC</div>
      </div>
    )
  }
}
