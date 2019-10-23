import { combineReducers } from 'redux';
import advertsReducer from './advertsReducer';
import loginReducer from './authReducer';

export default combineReducers({
    adverts: advertsReducer,
    login: loginReducer
});
