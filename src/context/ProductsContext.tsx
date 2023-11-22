import React, {createContext, useEffect, useState} from 'react'
import { childrenType } from './MonetContext'


type contextProps = {

    products : product[]

}

const ProductContext = createContext<contextProps>({
    products: []
})

interface product {

    category: string,
    description : string,
    id : number,
    image : string,
    price : number,
    rating : {
        rate:number,
        count : number
    },
    title:string

}


export const ProductProvider:React.FC<childrenType> = ( {children} ) => {

    const [products, setProducts] = useState<product[]>([])

    const requestApi = () => {
        return fetch("https://fakestoreapi.com/products").then((res) => res.json());
      };
      
    useEffect(() => {
        // Use the promise returned by requestApi
        requestApi().then((json) => {
          // Update the state inside the then block
          setProducts(json);
        });
      }, []);
return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
)


}



export default ProductContext







