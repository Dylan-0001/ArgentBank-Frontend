export const LOGIN_REQUEST_ACTION = 'LOGIN_REQUEST_ACTION';
export const LOGIN_SUCCESS_ACTION = 'LOGIN_SUCCESS_ACTION';
export const LOGIN_FAILURE_ACTION = 'LOGIN_FAILURE_ACTION';
export const LOGOUT_ACTION = 'LOGOUT_ACTION';

const initialState = {}

export const authReducer =(state = initialState, action) =>
{
    switch(action.type)
    {
        case LOGIN_REQUEST_ACTION:
            return action.payload;
        case LOGIN_SUCCESS_ACTION:
            return action.payload;
        case LOGIN_FAILURE_ACTION:
            return action.payload;
        case LOGOUT_ACTION:
            return action.payload;
        default:
            return state;
    }
}