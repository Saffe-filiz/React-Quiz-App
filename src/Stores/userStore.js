import { createSlice } from '@reduxjs/toolkit';


export const userStore = createSlice({
    name: 'userStore',
    initialState: {
        user: null,
    },

    reducers: {
  	    setUser (state, actions) {
  	    	state.user = actions.payload || null;
  	    },
    }
})

export const { setUser  } = userStore.actions

export default userStore.reducer