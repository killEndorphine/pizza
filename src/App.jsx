import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound/NotFound'
import PizzaPage from './pages/PizzaPage/PizzaPage'

import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="cart" element={<Cart />} />
        <Route path="items/:id" element={<PizzaPage />} />
      </Route>
    </Routes>
  )
}

export default App
