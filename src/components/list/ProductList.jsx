import React from 'react'

const ProductList = () => {

  // 목업 데이터
  const products = [
    { name: '상품1', price: 500 },
    { name: '상품2', price: 1500 },
    { name: '상품3', price: 1300 },
    { name: '상품4', price: 2000}
  ]


  return (
    <div>
        <h2>상품 리스트</h2>
        <ul className='flex flex-col gap-3 divide-y'>
          {products.map((product, index) => (
            <ProductItem 
              key={index} 
              name={product.name} 
              price={product.price} 
            />
          ))}
        </ul>
      </div>
  )
}

const ProductItem = ({name, price}) => {
  return (
    <li>
      <strong className='block text-2xl'>{name}</strong>
      <span>{price}원</span>
    </li>
  )
}

export default ProductList