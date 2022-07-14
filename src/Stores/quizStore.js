import { createSlice } from '@reduxjs/toolkit';


const quizStore = createSlice({
    name: 'quizStore',
    initialState: {
        questions: null, 
        quizIsReady: false,
    },

    reducers: {

        setQuestions (state, actions) {
            console.log('is work')
            state.questions = actions.payload;
        },

        quizReady (state, actions) {
            let isReady = actions.payload >= 5 
            state.quizIsReady = isReady;
        },
    }
})

export const { setQuestions, quizReady  } = quizStore.actions

export default quizStore.reducer