import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchItems = createAsyncThunk(
  'filterSort/fetchItemsStatus',
  async (params) => {
    const { order, sortBy, category, search, current } = params
    const { data } = await axios.get(
      `https://63735446348e947299093a2b.mockapi.io/items?page=${current}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
    )
    return data
  }
)

const initialState = {
  activeIndex: 0,
  selected: {
    name: 'популярности(по убыванию)',
    sortProperty: 'rating',
  },
  items: [],
  isLoading: false,
  currentPage: 1,
  status: 'loading',
}

const homeSlice = createSlice({
  name: 'filterSort',
  initialState,
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    setSelected(state, action) {
      state.selected = action.payload
    },
    setItems(state, action) {
      state.items = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'succes'
    },
    [fetchItems.rejected]: (state) => {
      state.status = 'error'
      state.items = []
    },
  },
})

export const {
  setActiveIndex,
  setSelected,
  setItems,
  setIsLoading,
  setCurrentPage,
} = homeSlice.actions

export default homeSlice.reducer
