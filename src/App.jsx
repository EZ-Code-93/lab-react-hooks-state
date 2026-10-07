import React, { useState, useEffect } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false)
  // TODO: Implement state for cart management
  const [cartItems, setCartItems] = useState([])
  // TODO: Implement state for category filtering
  const [category, setCategory] = useState('all')

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDarkMode])

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={setIsDarkMode} />
      {/* TODO: Implement category filter dropdown */}
      <label >Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} addToCart={handleAddToCart} />

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
