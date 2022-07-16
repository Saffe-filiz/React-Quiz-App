import { createSlice } from '@reduxjs/toolkit';


const quizStore = createSlice({
    name: 'quizStore',
    initialState: {
        questions: [], 
        quizTopics: [],
        topicModal: false,
        quizIsReady: false,
        userAnswers: {},
        quizScore: 0,
    },

    reducers: {
        setQuestions (state, actions) {
            state.questions = actions.payload;
        },

        quizReady (state, actions) {
            state.quizIsReady = actions.payload;
        },

        setQuestTopic (state, actions) {
            state.quizTopics = actions.payload
        },

        showTopicModal (state, actions) {
            state.topicModal = actions.payload
        },

        setAnswers (state, actions) {
            let {answer, index} = actions.payload;
            state.userAnswers[index] = answer
        }
    }
})

export const { setQuestions, quizReady, setQuestTopic, showTopicModal, setAnswers } = quizStore.actions

export default quizStore.reducer