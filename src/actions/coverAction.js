import * as types from './actionTypes';
import coverApi from '../api/coverApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';

export function loadCoversSuccess(covers) {
    return { type: types.LOAD_COVERS_SUCCESS, covers };
}

export function createCoverSuccess(cover) {
    return {type: types.CREATE_COVER_SUCCESS, cover};
}

export function updateCoverSuccess(cover) {
    return {type: types.UPDATE_COVER_SUCCESS, cover};
}

export function deleteCoverSuccess(coverId) {
    return {type: types.DELETE_COVER_SUCCESS, coverId};
}

export function loadCovers() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return coverApi.getAllCovers().then(covers => {
            dispatch(loadCoversSuccess(covers));
        }).catch(error => {
            throw (error);
        });
    };
}

export function saveCover(cover) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return coverApi.saveCover(cover).then(savedCover => {
            cover.id ? dispatch(updateCoverSuccess(savedCover)) :
                dispatch(createCoverSuccess(savedCover));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function deleteCover(carrierId) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return coverApi.deleteCover(carrierId).then(deletedCarrierId => {
            dispatch(deleteCoverSuccess(deletedCarrierId));
        }).catch(error => {
            throw (error);
        });
    };
}