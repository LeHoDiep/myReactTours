import React, { memo } from 'react'

const Z31zUserProfile = memo(props => {
  console.log('User Profile Props: ', props)
  const { handleClick } = props
  return (
    <div>
      <p>userProfile</p>
      <button onClick={() => handleClick(100)}>Click</button>
    </div>
  )
})
export default Z31zUserProfile
