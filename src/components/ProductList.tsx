import React, { useContext } from 'react'
import ProductContext from '../context/ProductsContext'
import Product from './Product'


const ProductList = () => {
    const {products} = useContext(ProductContext)
  return (
    <div className='huge-screen'>{products.map((item) => {
        return <Product image={item.image} price={item.price}/>
      })}</div>
  )
}

export default ProductList