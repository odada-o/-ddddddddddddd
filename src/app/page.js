import Button, { Button2 } from '@/components/button/Button'
import React from 'react'

const Home = () => {
  return (
    <div className='flex gap-3 justify-center py-5'>
      {/* {name: '확인'} */}
      {/* 단일 태그 */}
      <Button name="확인" />
      <Button name="취소" />
      <Button name="목록" />

      {/* 엄빠 태그 */}
      <Button2> <i></i>새로고침</Button2>
      <Button2> <i></i>새로고침</Button2>
      <Button2> <i></i>새로고침</Button2>
      <Button2> <i></i>새로고침</Button2>
    </div>
  )
}

export default Home