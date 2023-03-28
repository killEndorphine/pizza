import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound/NotFound'
import PizzaPage from './pages/PizzaPage/PizzaPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/items/:id" element={<PizzaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
