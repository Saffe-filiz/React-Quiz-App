import { createSlice } from '@reduxjs/toolkit';


const quizStore = createSlice({
    name: 'quizStore',
    initialState: {
        questions: [], 
        quizIsReady: false,
        quizTopics: [],
    },

    reducers: {
        setQuestions (state, actions) {
            state.questions = actions.payload;
        },

        quizReady (state, actions) {
            let isReady = actions.payload >= 5 
            state.quizIsReady = isReady;
        },

        setQuestTopic (state, actions) {
            state.quizTopics = actions.payload
        }
    }
})

export const { setQuestions, quizReady, setQuestTopic } = quizStore.actions

export default quizStore.reducer