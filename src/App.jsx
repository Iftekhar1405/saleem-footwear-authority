import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddProduct from './components/AddProduct'
import ProductGrid from './components/ProductGrid'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddProduct/>
      <ProductGrid/>
    </>
  )
}

export default App
