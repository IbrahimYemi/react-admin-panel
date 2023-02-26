import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const usersSlice = createSlice({
  name: 'userdetails',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserDetails } = usersSlice.actions

export default usersSlice.reducer