import { createSlice } from '@reduxjs/toolkit';


const quizStore = createSlice({
    name: 'quizStore',
    initialState: {
        questions: [], 
        quizTopics: [],
        topicModal: false,
        quizIsReady: false,
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
        }
    }
})

export const { setQuestions, quizReady, setQuestTopic, showTopicModal } = quizStore.actions

export default quizStore.reducer