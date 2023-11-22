import { useContext } from 'react'
import './App.css'
import GlobalContext from './context/MonetContext'



function App() {
  
  const {money,dispatch} = useContext(GlobalContext)
  const handleClick = () => {

    dispatch({type:"EXPENSE",payload:100})

  }
  return (
    
    <div>
      {money.money}
    <button onClick={handleClick}>EXPENSE</button>

    </div>
  )
}

export default App
