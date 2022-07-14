import { createSlice } from '@reduxjs/toolkit';


const quizStore = createSlice({
    name: 'quizStore',
    initialState: {
        questions: [], 
        //readyToQuiz: false,
    },

    reducers: {
        setQuestions (state, actions) {
            console.log('is work')
            state.questions = actions.payload
        }
    }
})

export const { setQuestions  } = quizStore.actions

export default quizStore.reducer