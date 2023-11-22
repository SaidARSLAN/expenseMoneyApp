import { useContext } from 'react'
import './App.css'
import GlobalContext from './context/MonetContext'
import ProductList from './components/ProductList'



function App() {
  const {money} = useContext(GlobalContext)

  

  return (
    
    <div className='App'>
      <h1>{money.money}</h1>
    <ProductList />
    </div>
  )
}

export default App
