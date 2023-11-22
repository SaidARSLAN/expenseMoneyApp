import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { Provider } from './context/MonetContext.tsx'
import { ProductProvider } from './context/ProductsContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>
  <ProductProvider>
    <App />
  </ProductProvider>
  </Provider>
)
