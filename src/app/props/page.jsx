import React from 'react'

const users = [
  {name: '김겨울', age: 2},
  {name: '김가을', age: 1},
  {name: '김여름', age: 5},
]

const PropsPage = () => {
  return (
    <>
      <div>
        <div>{users[0].name}이는 {users[0].age}살입니다.</div>
        <div>{users[1].name}이는 {users[1].age}살입니다.</div>
        <div>{users[2].name}이는 {users[2].age}살입니다.</div>
      </div>
      <div>
        {users.map((user, index) => (
          <div key={index}>{user.name}이는 {user.age}살입니다.</div>
        ))}
      </div>
    </>
  )
}

export default PropsPage