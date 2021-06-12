import React, { Component } from 'react'
import CalculatorDisplay from './calculator/CalculatorDisplay';

export default class Calculator extends Component {
  render() {
    return (
      <div id='calculator'>
        <CalculatorDisplay />
        <div id='equals' className='item'>=</div>
        <div id='seven' className='item'>7</div>
        <div id='eight' className='item'>8</div>
        <div id='nine' className='item'>9</div>
        <div id='four' className='item'>4</div>
        <div id='five' className='item'>5</div>
        <div id='six' className='item'>6</div>
        <div id='one' className='item'>1</div>
        <div id='two' className='item'>2</div>
        <div id='three' className='item'>3</div>
        <div id='zero' className='item'>0</div>
        <div id='add' className='item operator'>+</div>
        <div id='subtract' className='item operator'>-</div>
        <div id='multiply' className='item operator'>x</div>
        <div id='divide' className='item operator'>/</div>
        <div id='decimal' className='item'>.</div>
        <div id='clear' className='item'>AC</div>
      </div>
    )
  }
}
