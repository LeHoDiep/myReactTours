import React, { useState, useEffect, useRef, forwardRef } from 'react'
//ref là một thuộc tính của một Element tham chiếu đến element đó
//ref nhận vào 1 biến hoặc 1 function
//ref thường dùng để truy cập DOM nodes
//useRef dùng để lưu 1 biến có thể mutate
//dưới đây là tao tác nó trên rfc

//ngoài ra nếu mình dùng useRef cho 1 component thì thì sẽ bị lỗi
//ta sẽ dùng forwardRef để làm điều đó
//forwardRef là 1 HOC
// xem demo
//giả sử ta có 1 component tên là input
const Input = forwardRef((props, ref) => {
  console.log('renderInput')
  return <input {...props} ref={ref} />
})

export default function Z32zUser() {
  const pRef = useRef(null)
  //   console.log(pRef) //chạy khi chưa render nên current: null

  useEffect(() => {
    //chạy khi render nên có current: p
    console.log(pRef)
  }, [])

  //thử thao tác với pRef thì sao
  //tạo hàm handleChangeColor
  const changeColor = () => {
    pRef.current.style.color = 'red'
  }
  //useRef dùng để lưu 1 biến có thể mutate
  //useRef tạo biến mutate
  const count = useRef(0)
  const changeCount = () => {
    count.current = count.current + 1
    if (count.current === 3) {
      console.log('count.current = ', count.current)
    }
  }
  //dùng state k có mute
  const [count1, setCount1] = useState(0)

  const changeStateCount = () => {
    setCount1(prevCount => prevCount + 1)
    console.log(count1)
  }
  console.log('render User Function')

  //demo dùng useRef DOM component
  const inpRef = useRef(null)
  //log thử xem
  useEffect(() => {
    console.log(inpRef)
    //nếu k có forwardRef thì sẽ k đc
    //nhưng giờ ta đã có forwardRef
  }, [])
  //viết hàm đổi màu boder của input
  const ChangeColorBorder = () => {
    inpRef.current.style.borderColor = 'red'
  }
  return (
    <div>
      <div>User</div>
      <p ref={pRef}>Hello World</p>
      <p ref={element => console.log(element)}>Hello World 2</p>
      <button onClick={changeColor}>Đổi màu pRef</button>
      <button onClick={changeCount}>Change Count {count.current} </button>
      <button onClick={changeStateCount}>Change Count{count1} </button>
      //demo useRef cho component
      <div>
        <Input ref={inpRef} />
        <button onClick={ChangeColorBorder}>ChangeColorBorder</button>
        {/* đổi màu k làm re-render component con Input */}
      </div>
    </div>
  )
}
