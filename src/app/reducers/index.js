import { combineReducers } from 'redux';
import userType from './userTypeReducer';

export default combineReducers({
    userType: userType
});