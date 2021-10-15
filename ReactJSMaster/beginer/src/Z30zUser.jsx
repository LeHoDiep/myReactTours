import React, { useMemo, useState } from 'react'
import Z30zUserProfile from './Z30zUserProfile'
// khi truyền profile vào props thì profile luôn tạo mới khi cha render
// nên mình sẽ giải quyết vấn đề này:
// như bài trước ta fix bằng 1 callback custom lại memo
// nhưng cách đó k hay cho lắm , giờ mình sẽ dùng userMemo
export default function Z30zUser() {
  const [count, setCount] = useState(0)
  const data = 100
  //tạo thêm 1 profile
  // dùng useMemo ở đây
  const profile = useMemo(
    () => ({
      name: 'Điệp',
      age: 22
    }),
    []
  )
  // truyền vào deps là [] giống useEffect sẽ làm cho cái callback trong memo chỉ chạy 1 lần
  // render đầu tiên mà thôi
  return (
    <div>
      <p>User</p>
      <button onClick={() => setCount(count => count + 1)}>Change Count</button>
      <Z30zUserProfile data={data} profile={profile} />
    </div>
  )
}
