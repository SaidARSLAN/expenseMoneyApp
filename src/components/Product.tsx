import React, { useContext } from 'react'
import GlobalContext from '../context/MonetContext'

type productType = {

    image:string,
    price : number
}
const Product = ({image,price}:productType) => {

    const {money,dispatch} = useContext(GlobalContext)
    

    const handleClick = () => {
        dispatch({type:"EXPENSE",payload:price * 100})
        
    }
  return (
    <div className='center'>
    <div className='image-place'>
    <img src={image} className='image'/>
    <p>{price}$</p>
    </div>
            <button onClick={handleClick}>EXPENSE</button>
    </div>
  )
}

export default Product