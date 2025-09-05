import {combineReducers, createStore} from 'redux';
import {authReducer} from './auth/AuthReducer';

export const store = createStore(
    combineReducers({
        auth: authReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);