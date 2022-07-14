import user from './Stores/userStore.js';
import questions from './Stores/quizStore.js';

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
      user,
      questions,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})