// import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
// import Header vào
// import Header from './Header.jsx'
// import Footer from './Footer'
// //
// import Z17zdemoProp from './Z17zdemoProp'
// //
// import Product from './Product'
// //
// import Z21zdemoComponentWillUnmount from './Z21zdemoComponentWillUnmount'
// //
// import Z22zdemoComponentDidUpdate from './Z22zdemoComponentDidUpdate'
// //
// import Z24zUseStateHook from './Z24zUseStateHook'
//
// import Z26zErrorMutateStatezProps from './Z26zErrorMutateStatezProps'
//
// import Z28zUser from './Z28zUser'
//
// import Z29zUser from './Z29zUser'
//
// import Z30zUser from './Z30zUser'
//
// import Z31zUser from './Z31zUser'
//
// import Z32zUser from './Z32zUser'
// import Z32zUserClass from './Z32zUserClass'
//
// import Z33zUser from './Z33zUser'
//
import Z34zUser from './Z34zUser'
//bài 34: useContext
// export const AppContext = React.createContext()
//bài 34: useContext
// mình sẽ tạo ra 1 file Z34zAppContext
import AppContentProvider from './Z34zAppContenxt'
function App() {
  // demo ReactDOM.render dòng này
  const [state, setState] = useState(0)
  const [state1, setState1] = useState(true)
  const userObject = { name: 'Điệp đẹp trai' }
  //  bài 34
  // const user = {
  //   name: 'Điệp',
  //   age: 24
  // }
  //bình thường mình mà truyền cái user này vào props để cung cấp cho các component con
  //thì càng nhiều lớp thì càng cực
  //nên ngta sẽ dùng useContext
  //  bài 34
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit {state} <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setState(state + 1)}>Click</button>
      </header> */}
      {/* <Header></Header> */}
      {/* import thàng Footer */}
      {/* demo:props thì thêm name='Điệp đẹp trai' */}
      {/* <Footer name={userObject} age={22}></Footer> */}

      {/* 17.5 demo prop */}
      {/* <Z17zdemoProp></Z17zdemoProp> */}

      {/* 18 */}
      {/* <Product></Product> */}

      {/* 21 */}
      {/* <button onClick={() => setState1(state1 => !state1)}>change State</button>
      <p>State : {String(state1)}</p>
      {state1 && <Z21zdemoComponentWillUnmount />} */}
      {/* ta thấy rằng dù đã xóa đc Z21zdemoComponentWillUnmount khi state1 là false
          nhưng vẫn k xóa đc sự kiện click trên body*/}

      {/* 22 */}
      {/* <Z22zdemoComponentDidUpdate /> */}

      {/* 24 */}
      {/* <Z24zUseStateHook /> */}

      {/* 26 */}
      {/* <Z26zErrorMutateStatezProps /> */}

      {/* 28 */}
      {/* <Z28zUser /> */}

      {/* 29 */}
      {/* <Z29zUser /> */}

      {/* 30 */}
      {/* <Z30zUser /> */}

      {/* 31 */}
      {/* <Z31zUser /> */}

      {/* 32 */}
      {/* <Z32zUser /> */}
      {/* <Z32zUserClass /> */}

      {/* 33 */}
      {/* <Z33zUser /> */}

      {/* 34 */}
      {/* <AppContext.Provider value={user}>
        <Z34zUser />
      </AppContext.Provider> */}

      {/* 34 demo bằng file Z34zUserContext */}
      <AppContentProvider>
        <Z34zUser />
      </AppContentProvider>
    </div>
  )
}

export default App
