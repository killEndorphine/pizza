import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//import pizzas from './assets/pizzas.json'
export const SearchContext = React.createContext('')

function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <BrowserRouter>
      <div className="App">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </SearchContext.Provider>
      </div>
    </BrowserRouter>
  )
}

export default App
