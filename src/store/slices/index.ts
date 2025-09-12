import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userProfile: null,
    isConnected: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isConnected = true;
            localStorage.setItem('token', action.payload.token);
        },
        logout: (state) => {
            state.token = null;
            state.userProfile = null;
            state.isConnected = false;
            localStorage.removeItem('token');
        },
        importUser: (state, action) =>{
            state.userProfile = action.payload;
        },
    },
})

export const {loginSuccess, logout, importUser} = authSlice.actions;
export default authSlice.reducer;