import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/types'
import { notify } from  '../components/Notifications'

const initialState = {
    userCredentials: {}
}

export default function(state=initialState, action){
    switch(action.type){
        case LOGIN_SUCCESS:
            if (action.payload.error){
                notify(action.payload.error, 'red');
            } else {
                localStorage.setItem('token', action.payload.data.token);
                localStorage.setItem('username', action.payload.data.firstName);
                notify(`Welcome ${action.payload.data.firstName}`, 'green');
                window.location.replace('/');
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
                notify(action.payload.error, 'red');
            } else {
                localStorage.setItem('token', action.payload.data.token);
                localStorage.setItem('username', action.payload.data.firstName);
                notify(`Welcome ${action.payload.data.firstName}`, 'green');
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
