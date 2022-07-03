import { createSlice } from '@reduxjs/toolkit';


export const userStore = createSlice({
    name: 'userStore',
    initialState: {
        user: '',
    },

    reducers: {
  	    setUser (state, actions) {
  	    	state.user = actions.payload;
  	    },
    }
})

export const { setUser  } = userStore.actions

export default userStore.reducer