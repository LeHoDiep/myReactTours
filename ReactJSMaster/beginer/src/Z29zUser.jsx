import React, { useState } from 'react'
import Z29zUserProfile from './Z29zUserProfile'

export default function Z29zUser() {
  const [count, setCount] = useState(0)
  const data = 100
  //tạo thêm 1 profile

  const profile = {
    name: 'Điệp',
    age: 22
  }
  console.log('User')
  return (
    <div>
      <p>User</p>
      <button onClick={() => setCount(count => count + 1)}>Change Count</button>
      <Z29zUserProfile data={data} profile={profile} />
    </div>
  )
}
