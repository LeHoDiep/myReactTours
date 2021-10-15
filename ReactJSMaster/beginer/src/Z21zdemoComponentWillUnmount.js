import React, { Component } from 'react'

export default class Z21zdemoComponentWillUnmount extends Component {
  constructor(props) {
    super(props)
    // tạo state để demo
    this.state = {
      count: 0
    }
    this.interval = null
  }
  click = event => {
    console.log(event)
  }
  componentDidMount() {
    document.body.addEventListener('click', this.click)
    this.interval = setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1 }))
    }, 1000)
  }
  componentWillUnmount() {
    document.body.removeEventListener('click', this.click)
    clearInterval(this.interval)
  }

  //   ngoài xóa sự kiện ra ta còn có thể xóa các interval bằng cách tương tự
  render() {
    return (
      <div id="Z21zdemoComponentWillUnmount">
        <p>Demo ComponentWillUnmount</p>
        <p>Count: {this.state.count}</p>
      </div>
    )
  }
}
