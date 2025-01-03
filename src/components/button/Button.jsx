import React from 'react'

const Button = ({name, bg}) => {
  // props = {name: '확인', bg: 'blue-500'}
  // 구조분해할당
  // const {name, bg} = props
  return (
    // bg-blue-500
    <button 
    className={`bg-${bg}`}>
      {name}
      </button>
  )
}

export const Button2 = (props) => {
  // props = {children: '새로고침', bg: 'blue-500'}
  return (
    <button className={`bg-${props.bg}`}>{props.children}</button>
  )
}

export default Button