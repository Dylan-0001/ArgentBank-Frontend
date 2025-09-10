import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    userProfile: null,
    isConnected: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            //TODO LOGIN SUCCESS
        },
        logout: (state) => {
            //TODO LOGOUT 
        },
        importUser: (state, action) =>{
            //TODO IMPORT USER
        },
    },
})

export const {loginSuccess, logout, importUser} = authSlice.actions;
export default authSlice.reducer;