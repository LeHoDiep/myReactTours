import React, { useState, useEffect } from 'react'
//useState là 1 hook trong React
//1 function return về 1 array, ta dùng cú pháp destructuring để lấy
//nếu tạo initialValue thì phải dùng arrow function nếu không sẽ re lifecycirl

export default function Z24zUseStateHook() {
  const [name, setName] = useState('Điệp')
  const [age, setAge] = useState(20)
  const handleChangle = () => {
    setAge(22)
  }
  const [profile, setProfile] = useState({
    name: 'Hòa',
    age: 22
  })

  const handleChangle2 = () => {
    // setProfile({ age: profile.age + 1 }) làm như này sẽ mất cái age
    // phải làm như này
    // setProfile({ ...profile, age: profile.age + 1 })
    //*trong trường hợp này thì bấm 1 lần thì profile nó chỉ tăng 1 mà thôi ,
    //vì nó chưa kịp cập nhật profile mới đã phải set tiếp
    // setProfile({ ...profile, age: profile.age + 1 })
    // setProfile({ ...profile, age: profile.age + 1 })
    //*giải pháp là bỏ nó vào callback
    setProfile(preProfile => ({ ...preProfile, age: preProfile.age + 1 }))
    setProfile(preProfile => ({ ...preProfile, age: preProfile.age + 1 }))
  }
  //trong component function không có componentDidUpdate
  //nhưng ta sẽ có useEffect thay thế cho nó
  //k truyền deps componentDidUpdate
  // useEffect(() => {
  //   console.log('vừa update đó')
  //   //return trong useEffect là componentWillUnmount
  //   return () => {
  //     console.log('clearn')
  //   }
  // })
  //deps là []: chỉ chạy 1 lần khi render mà thôi componentDidMount
  // useEffect(() => {
  //   console.log('vừa update đó []')
  // }, [])

  //deps truyền [] thì nó chỉ checking các phần tử bên trong mà thôi
  useEffect(() => {
    console.log('vừa update đó [profile.age]')
    console.log(`profile.age = ${profile.age}`)
    setProfile(prevProfile => ({ ...profile, age: prevProfile.age + 1 }))
  }, [])
  return (
    <div>
      <button onClick={handleChangle}>Change</button>
      <p>Age: {age}</p>
      <button onClick={handleChangle2}>Change Profile</button>
      <p>name: {profile.name}</p>
      <p>age: {profile.age}</p>
    </div>
  )
}
