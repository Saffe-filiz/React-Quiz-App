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
        userQuestionResponseTime: {},
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

        clearUserAnswers ( state ) {
            state.userAnswers = {};
        }, 

        setScore ( state, actions ) {
            let {score, index} = actions.payload;
            state.userScore[index] = score;
        },

        takeQuizScore ( state ) {
            state.quizScore =  5 * Object.values(state.userScore).filter( v => v).length;
        },

        setResults ( state, actions ) {
            console.log(actions.payload)
            state.quizResults = actions.payload
        },

        addResult ( state, actions ) {
            state.quizResults.push(actions.payload)
        },

        takeResponseTime ( state, actions ){
            let { time, index } = actions.payload;
            console.log(time)
           state.userQuestionResponseTime[index] += time;
        }

    }
})

export const { setQuestions, quizReady, getTopics, showTopicModal, setAnswers, clearUserAnswers, setScore, takeQuizScore, setResults, addResult, takeResponseTime} = quizStore.actions

export default quizStore.reducer