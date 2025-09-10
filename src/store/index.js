import { configureStore } from '@reduxjs/toolkit';
import { authReducers } from './slices'

export const store = configureStore({
    reducer: {
        auth: authReducers,
    },
    devTools: true,
});
