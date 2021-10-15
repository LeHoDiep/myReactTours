import React, { useCallback, useMemo, useState } from 'react'
import Z31zUserProfile from './Z31zUserProfile'
export default function Z31zUser() {
  const [, setCount] = useState(0)
  //   const handleClick = value => console.log('Value: ', value)
  //bị tạo mới mỗi lần render
  //làm cho component con bị re-render
  //fix bằng useMemo ở bài trước
  //   const handleClick = useMemo(() => value => console.log('Value: ', value), [])
  //fix bằng useCallback ngắn hơn useMemo 1 tý
  const handleClick = useCallback(value => console.log('Value: ', value), [])

  return (
    <div>
      <p>User</p>
      <button onClick={() => setCount(count => count + 1)}>Change Count</button>
      <Z31zUserProfile handleClick={handleClick} />
    </div>
  )
}
