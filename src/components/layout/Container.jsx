import React from 'react'

const Container = ({children}) => {
  return (
    <div className='px-5 sm:px-8 mx-auto max-w-[1344px]'>
      {children}
    </div>
  )
}

export const Wrap = ({children}) => {
  // props = {children: 'tag'}
  // const {children} = props
  return (
    <div>{children}</div>
  )
}

export default Container