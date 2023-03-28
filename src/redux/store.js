import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './Slices/homeSlice'
import cartSlice from './Slices/cartSlice'

export const store = configureStore({
  reducer: {
    homeSlice: homeSlice,
    cartSlice: cartSlice,
  },
})
