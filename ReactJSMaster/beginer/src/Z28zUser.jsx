import React from 'react'
import Z28zUserProfile from './Z28zUserProfile'

//tạo HOC
const connect = Component => props => {
  const data = [1, 2, 3, 4]
  return <Component {...props} data={data} />
}

const UserProfileWrapper = connect(Z28zUserProfile)
export default function Z28zUser() {
  return (
    <div>
      <p>User</p>
      {/* <Z28zUserProfile /> */}
      {/* đã có sự thay thế */}
      <UserProfileWrapper />
    </div>
  )
}
