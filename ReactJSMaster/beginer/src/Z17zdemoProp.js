import React, { Component } from 'react'
import Z17z1ClassInput from './Z17z1ClassInput'
export default class Z17zdemoProp extends Component {
  //tạo constructor để có props từ html truyền vào
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <div className="demoProp">
        <Z17z1ClassInput value={this.state.value} onChange={this.handleChange}></Z17z1ClassInput>
        <p>{this.state.value}</p>
      </div>
    )
  }
}
