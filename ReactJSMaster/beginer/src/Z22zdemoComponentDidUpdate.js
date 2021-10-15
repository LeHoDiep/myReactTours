import React, { Component } from 'react'

//giả sử mình có 1 fetch api giả
const fetchApi = () => Promise.resolve(100)
export default class Z22zdemoComponentDidUpdate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }
  componentDidUpdate() {
    fetchApi().then(res => {
      this.setState(prevState => ({
        count: res
      }))
    })
    console.log(this.state.count)
  }
  render() {
    return (
      <div id="Z22zdemoComponentDidUpdate">
        <p> Z22zdemoComponentDidUpdate Demo</p>
        <button onClick={this.handleClick}>Increase</button>
        <p>Count: {this.state.count}</p>
      </div>
    )
  }
}
