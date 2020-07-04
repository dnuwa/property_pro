import { FETCH_ADS, 
    AD_CREATE_SUCCESS, 
    AD_CREATE_FAILURE,
    SHOW_AD_DETAILS,
 } from './types';

export const fetchAdverts = () => dispatch =>{ 
    fetch('https://property-pro-lite-api-app.herokuapp.com/api/v1/property')
        .then(res => res.json())
        .then(ads => dispatch({
            type: FETCH_ADS,
            payload: ads.data
        })
    )
}

export const postNewAd = (adObject) => dispatch =>{
    fetch('https://property-pro-lite-api-app.herokuapp.com/api/v1/property',{
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem("token"),
            'Accept': 'application/json, text/plain, */*',
            'content-type': 'application/json'
        },
        body: JSON.stringify(adObject)
    })
    .then(res => res.json(adObject))
    // .then(payload => console.log(payload));
    .then(payload => dispatch({
        type: AD_CREATE_SUCCESS,
        payload
    }))
    .catch(error => dispatch({
        type: AD_CREATE_FAILURE,
        error
    }))
}

export const getAdInfo = () => dispatch =>{

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const Id = urlParams.get("propertyId");

    fetch(`https://property-pro-lite-api-app.herokuapp.com/api/v1/property/${Id}`)
    .then(res => res.json())
    .then(adObj => dispatch({
        type: SHOW_AD_DETAILS,
        payload: adObj 
    }))
}
