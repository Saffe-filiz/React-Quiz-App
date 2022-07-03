import userStoreReducer from './Stores/userStore.js';
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
      user: userStoreReducer,
  }
})