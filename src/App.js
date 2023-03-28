import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Card from './pages/Card'
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//import pizzas from './assets/pizzas.json'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
