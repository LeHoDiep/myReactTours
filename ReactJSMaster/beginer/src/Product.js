import React, { Component } from 'react'

//demo componentDidMount()
const fetchApi = () => {
  return new Promise(res => {
    setTimeout(() => {
      res('success')
    }, 1000)
  })
}

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      check: true,
      //mình k thể render prop có giá trị là boolean và null, undefined,''
      name: 'Đẹp trai quá',
      productList: [
        {
          name: 'Iphone'
        },
        {
          name: 'SamSung'
        },
        {
          name: 'Oppo'
        }
      ],
      //thêm 1 message để demo componentDidMount
      message: ''
    }
  }

  //function để render
  renderProduct = () => {
    return this.state.productList.map((product, index) => <div key={index}>{product.name}</div>)
  }

  //demo componentDidMount()
  componentDidMount = () => {
    const msg = document.querySelector('#product').innerHTML
    //sẽ k query đc nếu viết ở constructor
    console.log(msg)

    fetchApi().then(res => {
      //lấy đc res thì set cho message
      this.setState({ message: res })
      //nếu đặt đoạn setState này trong constructor thì sẽ bị warning
    })
  }
  render() {
    // return <div>{this.state.check}</div>

    // return <div>{this.state.check ? <p>check là true</p> : <p>check là false</p>}</div>

    return (
      <div>
        {this.state.check && (
          //   <div>
          //   <React.Fragment>
          <>
            <p>check là true</p>
            <p>name: {this.state.name}</p>
            <p>render nhiều thẻ thì thêm dấu () và phải có div bọc ngoài </p>
            <p>
              Nhưng nếu không thích có div bao ngoài thì mình có <br></br>1 thẻ ảo là React.Fragment
            </p>
            <p>hoặc tag vô danh {'<> </>'}</p>
          </>
          /* </React.Fragment> */
          //   </div>
        )}
        {/* render list/ mảng bằng map */}
        {this.state.productList.map((product, index) => (
          <div key={index}>{product.name}</div>
        ))}
        {/*React sẽ khuyên mình nên có key để dễ phân biệt
        vậy nên mình dùng index làm key */}

        {/* render bằng function cũng đc */}
        {this.renderProduct()}
        <div id="product">this is Demo componentDidMount: {this.state.message}</div>
      </div>
    )
  }
}
