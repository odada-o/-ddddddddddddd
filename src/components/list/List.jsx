import React from 'react'

const List = (props) => {
  // props = {title: '뉴스 제목1', content: '뉴스 내용1', date: '2024-09-01'}
  return (
    <div className='py-3'>
      <strong>{props.title}</strong>
      <p>{props.content}</p>
      <span>{props.date}</span>
    </div>
  )
}

export default List