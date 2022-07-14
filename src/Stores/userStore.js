import { createSlice } from '@reduxjs/toolkit';


const userStore = createSlice({
    name: 'userStore',
    initialState: {
        user:  JSON.parse(localStorage.getItem('user')) ?? false,
        readyToQuiz: false,
    },

    reducers: {
  	    setUser (state, actions) {
            let user = localStorage.setItem('user', JSON.stringify(actions.payload))
  	    	state.user = actions.payload;
  	    },

        logOut (state, actions) {
            localStorage.removeItem('user')
            state.user = actions.payload;
        },

        startQuiz (state, actions) {
            state.readyToQuiz = actions.payload
        }
    }
})

export const { setUser, logOut, startQuiz  } = userStore.actions

export default userStore.reducer