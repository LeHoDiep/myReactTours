import React, { Component, createRef } from 'react'
//mình k có useRef mà mình có createRef
//thao tác ref trên Class component
export default class Z32zUserClass extends Component {
  constructor(props) {
    super(props)
    this.pRef = createRef(null)
    //demo mutate
    this.count = 0 //count đã đc mute như vậy thì k bị re-create mỗi lần render
    this.state = {
      count1: 0
    }
  }
  changeColor = () => {
    this.pRef.current.style.color = 'red'
  }

  //mutate | thay đổi k bị render
  changeCount = () => {
    this.count = this.count + 1
    if (this.count == 3) {
      console.log('count = ', this.count)
    }
  }

  // setState k mutate | render mỗi lần thay đổi
  changeStateCount = () => {
    this.setState(prevState => ({ count1: prevState.count1 + 1 }))
  }
  render() {
    console.log('UserClass Render')
    return (
      <div>
        <p ref={this.pRef}>Demo Ref trên Class</p>
        <button onClick={this.changeColor}>changeColor</button>
        <button onClick={this.changeCount}>changeCount = {this.count}</button>
        <button onClick={this.changeStateCount}>changeStateCount = {this.state.count1}</button>
      </div>
    )
  }
}
