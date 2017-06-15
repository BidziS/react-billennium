import * as types from './actionTypes';
import authorApi from '../api/authorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';

export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function createAuthorSuccess(author) {
    return {type: types.CREATE_AUTHOR_SUCCESS, author};
}

export function updateAuthorSuccess(author) {
    return {type: types.UPDATE_AUTHOR_SUCCESS, author};
}

export function deleteAuthorSuccess(authorId) {
    return {type: types.DELETE_AUTHOR_SUCCESS, authorId};
}

export function loadAuthors() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw (error);
        });
    };
}

export function saveAuthor(author) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return authorApi.saveAuthor(author).then(savedAuthor => {
            author.id ? dispatch(updateAuthorSuccess(savedAuthor)) :
                dispatch(createAuthorSuccess(savedAuthor));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function deleteAuthor(authorId) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return authorApi.deleteAuthor(authorId).then(deletedCarrierId => {
            dispatch(deleteAuthorSuccess(deletedCarrierId));
        }).catch(error => {
            throw (error);
        });
    };
}