"use client"
import React, { useState } from 'react'

const StatePage = () => {
  // const [변수, 변수를변경하는함수] = useState(초기값)
  const [number, setNumber] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div>
        <button onClick={() => {setIsOpen(!isOpen)}} className='p-3 bg-blue-500 fixed top-0 right-0 z-10'>
          {isOpen ? 'x' : '='}
        </button>
        <div className={`fixed top-0 w-full h-screen bg-gray-300 ${isOpen ? 'left-0' : 'left-full'}`}>전체 메뉴</div>



        {false ? '로그아웃' : '로그인'}
        {false && '참일때'}
        {'' || '주소정보가없음'}

      </div>

      <h2>상태 관리</h2>
      <div>
        <button onClick={() => {setNumber(number - 1)}}>
          감소
        </button>
        <strong>{number}</strong>
        <button onClick={() => {setNumber(number + 1)}}>
          증가
        </button>
      </div>

      

    </div>
  )
}

export default StatePage