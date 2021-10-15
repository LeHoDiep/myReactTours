import React from 'react'
import { useUser } from './Z34zAppContenxt'

export default function Z34zUserProfile() {
  //dùng useContext thay cho AppContext.Consumer
  //   const user = useContext(AppContext)
  const user = useUser()
  return (
    <div>
      {/* cách 1 dùng AppContext.Consumer*/}
      {/* <AppContext.Consumer>
        {value => {
          console.log(value)
          return (
            <ul>
              <li>Name: {value.name}</li>
              <li>age: {value.age}</li>
            </ul>
          )
        }}
      </AppContext.Consumer> */}

      {/* dùng useContext */}
      <ul>
        <li>Name: {user.name}</li>
        <li>age: {user.age}</li>
      </ul>
    </div>
  )
}
