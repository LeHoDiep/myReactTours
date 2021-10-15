import React, { memo } from 'react'

const Z29zUserProfile = memo(
  props => {
    console.log('UserProfile', props)
    return <div>UserProfile</div>
  },
  (prevProps, nextProps) => {
    return prevProps.profile.name === nextProps.profile.name
  }
)
export default Z29zUserProfile //giúp thằng này k bị re-render khi cha thay đổi
//thằng này lưu giá trị props truyền vào theo kiểu shallow
//nên nếu có thay đổi thì mới render, không thì sẽ k render
//nên như vậy thì sẽ bị tốn bộ nhớ, nhưng bù lại thì sẽ nhanh hơn
//k nên lạm dụng sẽ làm tốn ram
