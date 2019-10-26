import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types'

export const authLogin = (userdData) => dispatch => {
    fetch('https://property-pro-lite-api-app.herokuapp.com/api/v1/auth/signin',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(userdData)
    })
    .then(res => res.json(userdData))
    // dispatch server response to the reducer
    .then(payload => dispatch({
        type: LOGIN_SUCCESS,
        payload
    }))
    .catch(error => dispatch({
        type: LOGIN_FAILURE,
        error
    })
    )
}
