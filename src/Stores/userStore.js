import { createSlice } from '@reduxjs/toolkit';


const userStore = createSlice({
    name: 'userStore',
    initialState: {
        user:  JSON.parse(localStorage.getItem('user')) ?? false,
    },

    reducers: {
  	    setUser (state, actions) {
            let user = localStorage.setItem('user', JSON.stringify(actions.payload))
  	    	state.user = actions.payload;
  	    },

        logOut (state, actions) {
            localStorage.removeItem('user')
            state.user = actions.payload;
        }
    }
})

export const { setUser, logOut  } = userStore.actions

export default userStore.reducer