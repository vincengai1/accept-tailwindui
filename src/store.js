import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './slices/languageSlice';
import formReducer from './slices/formSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    language: languageReducer,
  },
})