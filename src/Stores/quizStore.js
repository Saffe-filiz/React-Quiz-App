import { createSlice } from '@reduxjs/toolkit';


const quizStore = createSlice({
    name: 'quizStore',
    initialState: {
        questions: [], 
        quizTopics: [],
        topicModal: false,
        quizIsReady: false,
        userAnswers: [],
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
            let {answer, index} = actions.payload
            let self = {...state.userAnswer};
            self = self[index] = answer;
            console.log(answer, index, self)
            state.userAnswers.push(self);
        }
    }
})

export const { setQuestions, quizReady, setQuestTopic, showTopicModal, setAnswers } = quizStore.actions

export default quizStore.reducer