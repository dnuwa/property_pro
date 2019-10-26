import { combineReducers } from 'redux';
import advertsReducer from './advertsReducer';
import authReducer from './authReducer';

export default combineReducers({
    adverts: advertsReducer,
    authentication: authReducer
});
