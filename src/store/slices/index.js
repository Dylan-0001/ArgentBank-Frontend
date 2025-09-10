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
            state.token = action.payload.token;
            state.isConnected = true;
        },
        logout: (state) => {
            state.token = null;
            state.userProfile = null;
            state.isConnected = false;
        },
        importUser: (state, action) =>{
            state.userProfile = action.payload;
        },
    },
})

export const {loginSuccess, logout, importUser} = authSlice.actions;
export default authSlice.reducer;