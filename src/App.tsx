import { useContext } from 'react'
import './App.css'
import GlobalContext from './context/MonetContext'
import ProductList from './components/ProductList'



function App() {
  const {money} = useContext(GlobalContext)

  

  return (
    
    <div>
      {money.money}
    <ProductList />
    </div>
  )
}

export default App
