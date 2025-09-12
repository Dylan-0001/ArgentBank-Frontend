import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    token: null,
    userProfile: {
        userName: "",
    },
    isConnected: false,
}

const apiLink = "http://localhost:3001/api/v1/";

export const fetchPostUserData = createAsyncThunk(
    "user/fetchPostUserData",
    async (data: unknown) => {
        try {
            const response = await fetch(apiLink + "user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Erreur serveur");
            }
            return response.json();
        }catch(err) {
            throw new Error(err.message || "Erreur serveur");
        }
    }
);

export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async (token: string) => {
        try {
            const response = await fetch(apiLink + "user/profile", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Erreur serveur");
            }
            return response.json();
        }catch(err) {
            throw new Error(err.message || "Erreur serveur");
        }
    }
);

export const fetchUpdateUserData = createAsyncThunk(
    "user/fetchUpdateUserData",
    async ({token ,newUsername}: {token: string, newUsername: string}) => {
        try {
            const response = await fetch(apiLink + "user/profile", {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({userName: newUsername}),
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Erreur serveur");
            }
            return response.json();
        }catch(err) {
            throw new Error(err.message || "Erreur serveur");
        }
    }
);


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isConnected = true;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        },
        logout: (state) => {
            state.token = null;
            state.userProfile = null;
            state.isConnected = false;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            //FETCH GET USER DATA
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.userProfile = action.payload.body;
            })
            //FETCH UPDATE USER DATA
            .addCase(fetchUpdateUserData.fulfilled, (state, action) => {
                state.userProfile = {...state.userProfile , ...action.payload.body};
            })
            //FETCH POST USER DATA
            .addCase(fetchPostUserData.fulfilled, (state, action) => {
                state.isConnected = true;
                state.token = action.payload.body.token;
                localStorage.setItem('token', action.payload.body.token);
            })
    }
})

export const {loginSuccess, logout} = userSlice.actions;
export default userSlice.reducer;