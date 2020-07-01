import { FETCH_ADS, AD_CREATE_SUCCESS, AD_CREATE_FAILURE, SHOW_AD_DETAILS } from '../actions/types';
import { notify } from  '../components/Notifications'

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    switch (action.type){
        case FETCH_ADS:
            return {
                ...state,
                items: action.payload
            }
        case AD_CREATE_SUCCESS:
            if (action.payload.error){
                notify(action.payload.error, 'red');
            } else {
                localStorage.setItem('advert_id', action.payload.data.id);
                notify('Success', 'green');
                window.location.replace('/');
            }
            return {
                ...state,
                item: action.payload
            }
        case AD_CREATE_FAILURE:

            //this needs fixing for when the token is expired
            notify('Something has gone wrong, check your internet and try again', 'red');
            return {
                ...state,
                item: action.payload
            }
        case SHOW_AD_DETAILS:
            // console.log(action.payload);
            return{
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}
