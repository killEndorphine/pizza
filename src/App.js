import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//import pizzas from './assets/pizzas.json'

function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <BrowserRouter>
      <div className="App">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
