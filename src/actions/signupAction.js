import { SIGNUP_FAILURE, SIGNUP_SUCCESS } from './types'

export const authSignup = (userData) => dispatch => {
    fetch('https://property-pro-lite-api-app.herokuapp.com/api/v1/auth/signup',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json(userData))
    // .then(msg => console.log(msg))
    .then(payload => dispatch({
        type: SIGNUP_SUCCESS,
        payload
    }))
    .catch(error => dispatch({
        type: SIGNUP_FAILURE,
        error
    }))
}