import { configureStore } from '@reduxjs/toolkit'
import contentdetailsReducer from './contentDetails'
import userdetailsReducer from './userDetails'

export const store = configureStore({
  reducer: {
    contentDetails: contentdetailsReducer,
    userDetails: userdetailsReducer
  },
})