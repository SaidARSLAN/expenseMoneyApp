import React, { useContext } from 'react'
import GlobalContext from '../context/MonetContext'

type productType = {

    title:string,
    price : number
}
const Product = ({title,price}:productType) => {

    
    const {money,dispatch} = useContext(GlobalContext)
    

    const handleClick = () => {
        dispatch({type:"EXPENSE",payload:price * 100})
        
    }
  return (
    <div>
    <p>{title} {price}$</p>
            <button onClick={handleClick}>EXPENSE</button>
    </div>
  )
}

export default Product