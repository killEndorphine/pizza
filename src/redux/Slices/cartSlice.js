import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  total: 0,
  items: [],
  totalPrice: 0,
}
const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
      state.total = state.items.reduce((sum, obj) => {
        return obj.count + sum
      }, 0)
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload)
      if (findItem.count > 1) {
        findItem.count--
      } else {
        state.items = state.items.filter((obj) => obj !== findItem)
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
      state.total = state.items.reduce((sum, obj) => {
        return obj.count + sum
      }, 0)
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
      state.total = state.items.reduce((sum, obj) => {
        return obj.count + sum
      }, 0)
    },
    clearItems(state) {
      state.items = []
      state.totalPrice = 0
      state.total = 0
    },
  },
})

export const cartSliceSelector = (state) => state.cartSlice
export const findItemCartSliceSelector = (id) => (state) =>
  state.cartSlice.items.find((obj) => obj.id === id)

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions

export default cartSlice.reducer
