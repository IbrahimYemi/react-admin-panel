import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const contentSlice = createSlice({
  name: 'contentDetails',
  initialState,
  reducers: {
    setContentDetails: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setContentDetails } = contentSlice.actions

export default contentSlice.reducer