import React, {createContext, useEffect} from 'react'
import { childrenType } from './MonetContext'


const ProductContext = createContext({})



export const ProductProvider:React.FC<childrenType> = ( {children} ) => {


    const requestApi = () => {

        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => console.log(json))

    }
    useEffect(() => {

        requestApi()

    },[])
return (
    <ProductContext.Provider value={{}}>
        {children}
    </ProductContext.Provider>
)


}



export default ProductContext







