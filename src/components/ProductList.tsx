import React, { useContext } from 'react'
import ProductContext from '../context/ProductsContext'
import Product from './Product'


const ProductList = () => {
    const {products} = useContext(ProductContext)
  return (
    <div>{products.map((item) => {
        return <Product title={item.title} price={item.price}/>
      })}</div>
  )
}

export default ProductList