import React, { useState } from 'react'
import Z33zUsePrevours from './Z33zUsePrevours.jsx'
//tạo 1 Hook
const useInputNumber = initialValue => {
  //tạo state value
  const [value, setValue] = useState(initialValue)
  //tạo hàm
  const handleChange = event => {
    const val = event.target.value
    if (/^\d*$/.test(val) || val === '') setValue(prevValue => val)
  }
  return [value, handleChange]
}

export default function Z33zUser() {
  const [value, setValue] = useInputNumber('')
  const [valueArea, setValueArea] = useInputNumber('')
  const prevValueTextArea = Z33zUsePrevours(valueArea)
  console.log(prevValueTextArea)
  console.log('User Render')
  return (
    <div>
      <p>User</p>
      <input type="text" onChange={setValue} value={value} />
      <textarea onChange={setValueArea} value={valueArea}></textarea>
    </div>
  )
}
