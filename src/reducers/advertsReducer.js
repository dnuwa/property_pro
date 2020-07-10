import { FETCH_ADS, AD_CREATE_SUCCESS, AD_CREATE_FAILURE, SHOW_AD_DETAILS } from '../actions/types';
import { success, error } from 'react-toast-notification';

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
                error(action.payload.error);
            } else {
                localStorage.setItem('advert_id', action.payload.data.id);
                success(`Created successfully!`)
                window.location.replace('/');
            }
            return {
                ...state,
                item: action.payload
            }
        case AD_CREATE_FAILURE:

            //this needs fixing for when the token is expired
            error('Something has gone wrong, check your internet and try again');
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
