//tạo nhanh bằng rcc: react class component
import React, { Component } from 'react'
//import prop-types
import PropTypes from 'prop-types'
class Footer extends Component {
  /*demo state setState*/
  //vì đây là class component mà nên mình tạo 1 constructor
  //state là 1 object chứa dữ liệu trong component của chúng ta
  //ở đây ta giả sử state lưu 1 title
  constructor(props) {
    super(props)
    this.state = {
      title: 'tui là title trong state nè mấy mẹ ơi',
      number: 0
    }
    //mặc định trong method k hiểu this là gì đâu
    //nên ta có 3 cách fix đơn giản
    //bind this vào click
    // this.click = this.click.bind(this)
    //cách 2 là bọc function vào arrow function ở chỗ dùng
  }
  //tạo 1 method bằng function declaration thì bị mất this,this dùng bind
  //hoặc lúc xài dùng arrow function bọc lại
  // click() {
  //   this.setState({ number: 1 })
  // }
  //tạo method bằng arrow thì dùng this bình thường
  // click = value => {
  //   this.setState({ number: value })
  // }
  //currying để truyền vào parameter
  click = value => () => {
    this.setState(prevState => ({
      number: prevState.number + value
    }))
  }
  //prewState thay cho this.state sẽ giúp mình k bị bất đồng bộ
  /*demo state setState*/
  render() {
    console.log(this.props)
    //log đc object có property là name:'Điệp đẹp trai'
    return (
      <footer>
        {/* <button
          onClick={() => {
            this.setState({ number: 1 })
          }}
          // viết onclick thì rườm rà khó hiểu
          // ta chuyển đoạn code trên thành method
        >
          Click Me {this.state.number}
        </button> */}

        {/* truyền vào onclick 1 function(this.click) 
                  không phải gọi function(this.click())
         */}

        {/* cách 2: bọc bằng arrow function */}

        {/* <button onClick={() => this.click()}> Click {this.state.number}</button> */}

        {/* dùng arrow function cho method và arrow function cho lúc xài 
              để có thể truyền vào tham số */}

        {/* <button onClick={() => this.click(2)}> Click {this.state.number}</button> */}

        {/* cách truyền thứ 2 là dùng currying (sướng quá vn ơi)*/}
        <button onClick={this.click(2)}> Click {this.state.number}</button>

        {this.state.title}
      </footer>
    )
  }
}

export default Footer

//demo dùng propTypes check kiểu dữ liệu của props có khớp k
//k khớp sẽ báo lỗi
Footer.propTypes = {
  name: PropTypes.object,
  age: PropTypes.number.isRequired
}
//isRequired ép người dùng phải có attribute này
