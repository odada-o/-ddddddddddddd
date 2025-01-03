import React from 'react'

const Card = (props) => {
  // props = {children: [<h2>뉴스</h2>, <p>뉴스 내용</p>]}
  return (
    <div className='border border-solid border-red-500 p-5 rounded-lg bg-white'>
      {props.children}
    </div>
  )
}

export default Card