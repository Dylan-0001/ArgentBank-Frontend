import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userProfile: {
        userName: "",
    },
    isConnected: false,
}

export const userSlice = createSlice({
    name: 'user',
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
        updateUser: (state, action) => {
            state.userProfile = {...state.userProfile, ...action.payload};
        }
    },
})

export const {loginSuccess, logout, importUser, updateUser} = userSlice.actions;
export default userSlice.reducer;