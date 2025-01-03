import Button, { Button2 } from '@/components/button/Button'
import Card from '@/components/card/Card'
import Container from '@/components/layout/Container'
import List from '@/components/list/List'
import ProductList from '@/components/list/ProductList'
import { mockupNews } from '@/data/news'
import Mercury from 'mercury'
import React from 'react'

const Home = () => {

  const name = false ? '참' : '거짓'
  const user = {
    name: '홍길동',
    age: 20,
    bg: "yellow-300"
  }
  const array = [1, 2, 3]
  return (
    <Container>

      <ProductList />
      <div className='flex flex-col gap-3 justify-center py-5 max-w-sm mx-auto'>
        <Card>
          <h2>뉴스</h2>
          <div className='divide-y'>
            {mockupNews.map((item, index) => (
              <List 
                key={index} 
                title={item.title} 
                content={item.content} 
                date={item.date}
              />
            ))}
          </div>
        </Card>
        <div>{array[2]}</div>
        <div
        className={`bg-${user.bg}`}
        >{user.name}은 {user.age}살입니다.
        </div>
        <button>{name}</button>



        {/* {name: '확인'} */}
        {/* 단일 태그 */}
        {/* {name: '확인', bg: 'blue-500'} */}
        <Button name="확인" bg="blue-500" />
        <Button name="취소" bg="red-500" />
        <Button name="목록" bg="red-500" />

        {/* 엄빠 태그 */}
        <Button2 bg="blue-500"> <i></i>새로고침</Button2>
        <Button2 bg="red-500"> <i></i>새로고침</Button2>
        <Button2 bg="blue-500"> <i></i>새로고침</Button2>
        <Button2 bg="red-500"> <i></i>새로고침</Button2>
      </div>
    </Container>
  )
}

export default Home