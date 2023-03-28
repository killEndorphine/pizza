import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchItem = createAsyncThunk(
  'pizzaSlice/fetchItemStatus',
  async (params) => {
    const id = params
    const { data } = await axios.get(
      `https://63735446348e947299093a2b.mockapi.io/items/${id}`
    )
    return data
  }
)

const initialState = {
  pizza: null,
  status: 'loading',
}

const pizzaSlice = createSlice({
  name: 'pizzaSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchItem.pending]: (state) => {
      state.status = 'loading'
      state.pizza = null
    },
    [fetchItem.fulfilled]: (state, action) => {
      state.pizza = action.payload
      state.status = 'succes'
    },
    [fetchItem.rejected]: (state) => {
      state.status = 'error'
      state.items = null
    },
  },
})

export const pizzaSliceSelector = (state) => state.pizzaSlice

export const {} = pizzaSlice.actions

export default pizzaSlice.reducer
