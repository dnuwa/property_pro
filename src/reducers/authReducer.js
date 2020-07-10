import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/types'
import { success, error } from 'react-toast-notification';

const initialState = {
    userInfo: {}
}

export default function(state=initialState, action){
    switch(action.type){
        case LOGIN_SUCCESS:
            if (action.payload.error){
                error(action.payload.error);
            } else {
                localStorage.setItem('token', action.payload.data.token);
                localStorage.setItem('username', action.payload.data.firstName);
                success(`Welcome ${action.payload.data.firstName}`)
            }
            return {
                ...state,
                userInfo: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case SIGNUP_SUCCESS:
            if (action.payload.error){
                error(action.payload.error);
            } else {
                localStorage.setItem('token', action.payload.data.token);
                localStorage.setItem('username', action.payload.data.firstName);
                success(`Welcome ${action.payload.data.firstName}`)
                window.location.replace('/');
            }
            return {
                ...state,
                successPayload: action.payload
            }
        case SIGNUP_FAILURE:
                return {
                    ...state,
                    errorPayload: action.error
                }
        default:
            return state;
    }
}
