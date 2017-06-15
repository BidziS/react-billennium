import * as types from './actionTypes';
import userApi from '../api/userApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';

export function loadUsersSuccess(users) {
    return { type: types.LOAD_USERS_SUCCESS, users };
}
export function loginUserSuccess(currentUser) {
    return { type: types.LOGIN_USER_SUCCESS, currentUser };
}
export function logoutUserSuccess(currentUser) {
    return { type: types.LOGOUT_USER_SUCCESS, currentUser };
}

export function loadUsers() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return userApi.getAllUsers().then(users => {
            dispatch(loadUsersSuccess(users));
        }).catch(error => {
            throw (error);
        });
    };
}
export function loginUser(userLogin) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return userApi.loginUser(userLogin).then(currentUser => {
            dispatch(loginUserSuccess(currentUser));
        }).catch(error => {
            throw (error);
        });
    };
}
export function logoutUser() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return userApi.logoutUser().then(currentUser => {
            dispatch(logoutUserSuccess(currentUser));
        }).catch(error => {
            throw (error);
        });
    };
}
export function checkUserIsLogIn(){
    return {type: types.CHECK_USER_IS_LOG_IN};
}
