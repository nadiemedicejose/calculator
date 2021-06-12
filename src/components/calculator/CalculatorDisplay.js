import React, { Component } from 'react'

export default class CalculatorDisplay extends Component {
  render() {
    return (
      <div id='CalculatorDisplay' className='item'>
        <div id='formula'>{this.props.total}</div>
        <div id='display'>{this.props.current}</div>
      </div>
    )
  }
}
