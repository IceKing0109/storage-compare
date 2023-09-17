import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../features/filterSlice'
import imageReducer from '../features/imageSlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    image: imageReducer,
  },
})