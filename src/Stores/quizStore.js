import { createSlice } from '@reduxjs/toolkit';


const quizStore = createSlice({
    name: 'quizStore',
    initialState: {
        questions: [], 
        quizTopics: [],
        topicModal: false,
        quizIsReady: false,
        userAnswers: {},
        userScore: {},
        quizScore: 0,
        quizResults: [], 
    },

    reducers: {
        setQuestions (state, actions) {
            state.questions = actions.payload.sort(() => Math.random() - 0.5);
        },

        quizReady (state, actions) {
            state.quizIsReady = actions.payload;
        },

        getTopics (state, actions) {
            state.quizTopics = actions.payload
        },

        showTopicModal (state, actions) {
            state.topicModal = actions.payload
        },

        setAnswers (state, actions) {
            let {answer, index} = actions.payload;
            state.userAnswers[index] = answer;
        },

        setScore ( state, actions ) {
            let {score, index} = actions.payload;
            state.userScore[index] = score;
        },

        takeQuizScore ( state ) {
            state.quizScore =  5 * Object.values(state.userScore).filter( v => v).length;
        },

        setResults ( state, actions ) {
            console.log( actions.payload)
            state.quizResults = actions.payload
        }
    }
})

export const { setQuestions, quizReady, getTopics, showTopicModal, setAnswers, setScore, takeQuizScore, setResults } = quizStore.actions

export default quizStore.reducer