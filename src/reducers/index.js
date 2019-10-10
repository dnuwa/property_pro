import { combineReducers } from 'redux';
import advertsReducer from './advertsReducer';

export default combineReducers({
    adverts: advertsReducer
});
