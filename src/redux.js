import userStoreReducer from './Stores/userStore.js';
import quizStoreReducer from './Stores/quizStore.js';
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
      user: userStoreReducer,
      questions: quizStoreReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})