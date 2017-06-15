import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.currentUser, action) {
    switch (action.type){
        case types.LOGIN_USER_SUCCESS:
            return action.currentUser;
        case types.LOGOUT_USER_SUCCESS:
            return action.currentUser;
        default:
            return state;
    }
}