import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './Slices/homeSlice'
import cartSlice from './Slices/cartSlice'
import pizzaSlice from './Slices/pizzaSlice'

export const store = configureStore({
  reducer: {
    homeSlice: homeSlice,
    cartSlice: cartSlice,
    pizzaSlice: pizzaSlice,
  },
})
