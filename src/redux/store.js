import { configureStore } from '@reduxjs/toolkit'
import filterSortSlice from './Slices/filterSortSlice'

export const store = configureStore({
  reducer: {
    filterSortSlice,
  },
})
