import { configureStore } from '@reduxjs/toolkit';
import { storeReducers } from './reducers'
import { getPosts } from './actions/post.action';

export const store = configureStore({
    reducer: storeReducers,
    devTools: true,
});

store.dispatch(getPosts());