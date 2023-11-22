import { useContext } from 'react'
import './App.css'
import GlobalContext from './context/MonetContext'
import ProductContext from './context/ProductsContext'



function App() {
  
  const {money,dispatch} = useContext(GlobalContext)
  const {products} = useContext(ProductContext)
  const handleClick = () => {

    dispatch({type:"EXPENSE",payload:100})

  }
  return (
    
    <div>
      {money.money}
    <button onClick={handleClick}>EXPENSE</button>
    <div>{products.map((item,idx) => {
      return <p key={item.title + idx}>{item.title}</p>
    })}</div>
    </div>
  )
}

export default App
