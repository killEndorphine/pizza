import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeIndex: 0,
  selected: {
    name: 'популярности(по убыванию)',
    sortProperty: 'rating',
  },
}
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
  },
})

export const { setActiveIndex } = filterSlice.actions

export default filterSlice.reducer
