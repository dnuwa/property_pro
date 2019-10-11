import { FETCH_ADS, NEW_POST } from './types';

export const fetchAdverts = () => dispatch =>{ 
    fetch('https://property-pro-lite-api-app.herokuapp.com/api/v1/property')
        .then(res => res.json())
        .then(ads => dispatch({
            type: FETCH_ADS,
            payload: ads.data
        })); 
}
