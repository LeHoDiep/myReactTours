import React, { useState, useEffect } from 'react'
import Z26zUserProfile from './Z26zUserProfile'
//lỗi mute State
export default function Z26zErrorMutateStatezProps() {
  const [profile, setProfile] = useState({
    name: 'Điệp',
    address: {
      company: '115/13 Đường Đình Phong Phú ',
      home: '10/19 Đường Phan Văn Hớn, P. Tân Thới Nhất'
    }
  })
  const [count, setCount] = useState(0)
  const handleChange = () => {
    const _profile = { ...profile }

    // _profile.address.company = 'Phan Đăng Lưu' //address này là 2 chàng trỏ 1 nàng nè
    //như này là mute state => ãi chĩa => useEffect sẽ k nghe update đc
    _profile.address = { ..._profile.address, company: 'Phan Đăng Lưu' } //nên phải rã nó ra như này
    setProfile(_profile)
  }
  return (
    <div>
      <p>Demo Mute State</p>
      <p>Name: {profile.name}</p>
      <p>address:</p>
      <p>company: {profile.address.company}</p>
      <p>home: {profile.address.home}</p>
      {/* <button onClick={handleChange}>change</button> nút này để demo muteState*/}
      <button
        onClick={() => {
          setCount(count => count + 1)
        }}
      >
        change Count {count}
      </button>
      <Z26zUserProfile profile={profile} />
    </div>
  )
}
