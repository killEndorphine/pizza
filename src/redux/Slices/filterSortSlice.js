import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeIndex: 0,
  selected: {
    name: 'популярности(по убыванию)',
    sortProperty: 'rating',
  },
}
const filterSortSlice = createSlice({
  name: 'filterSort',
  initialState,
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    setSelected(state, action) {
      state.selected = action.payload
    },
  },
})

export const { setActiveIndex, setSelected } = filterSortSlice.actions

export default filterSortSlice.reducer
