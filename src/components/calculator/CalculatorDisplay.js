import React, { Component } from 'react'

export default class CalculatorDisplay extends Component {
  render() {
    return (
      <div id='CalculatorDisplay' className='item'>
        <div id='formula'>Formula</div>
        <div id='display'>Current Value</div>
      </div>
    )
  }
}
