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
    },

    reducers: {
        setQuestions (state, actions) {
            state.questions = actions.payload.sort( (a, b) => {return Math.random() - 0.5});
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
            state.userAnswers[index] = answer;
        },

        setScore ( state, actions ) {
            let {score, index} = actions.payload;
            state.userScore[index] = score;
        },

        takeQuizScore ( state ) {
            state.quizScore =  5 * Object.values(state.userScore).filter( v => v).length;
        }
    }
})

export const { setQuestions, quizReady, setQuestTopic, showTopicModal, setAnswers, setScore, takeQuizScore } = quizStore.actions

export default quizStore.reducer