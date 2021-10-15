import React, { useEffect } from 'react'

//nhận vào profile nên parameter là destructuring có profile
export default function Z26zUserProfile({ profile }) {
  useEffect(() => {
    profile.name = 'Hồng'
  }, [profile])
  return (
    <div>
      <p>User Profile</p>
    </div>
  )
}
