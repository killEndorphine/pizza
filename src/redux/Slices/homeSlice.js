import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeIndex: 0,
  selected: {
    name: 'популярности(по убыванию)',
    sortProperty: 'rating',
  },
  items: [],
  isLoading: false,
  currentPage: 1,
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
})

export const {
  setActiveIndex,
  setSelected,
  setItems,
  setIsLoading,
  setCurrentPage,
} = homeSlice.actions

export default homeSlice.reducer
