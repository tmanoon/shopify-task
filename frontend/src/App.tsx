import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [itemName, setItemName] = useState('')

  return (
<section className='products-page'>
  <h1>Sportix</h1>
  <h2>Add a product</h2>
  <form>
    <label htmlFor='product-name'>
      Product Name
    </label>
    <input id="product-name" name="product-name" placeholder='Product Name' value={itemName} onChange={(e) => setItemName(e.target.value)} />
    <button type="button">Create</button>
  </form>
</section>
  )
}

export default App
