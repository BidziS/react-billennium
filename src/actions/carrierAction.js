import * as types from './actionTypes';
import carrierApi from '../api/carrierApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';

export function loadCarriersSuccess(carriers) {
    return { type: types.LOAD_CARRIERS_SUCCESS, carriers };
}

export function createCarriersSuccess(carrier) {
    return {type: types.CREATE_CARRIER_SUCCESS, carrier};
}

export function updateCarriersSuccess(carrier) {
    return {type: types.UPDATE_CARRIER_SUCCESS, carrier};
}

export function deleteCarriersSuccess(carrierId) {
    return {type: types.DELETE_CARRIER_SUCCESS, carrierId};
}

export function loadCarriers() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return carrierApi.getAllCarriers().then(carriers => {
            dispatch(loadCarriersSuccess(carriers));
        }).catch(error => {
            throw (error);
        });
    };
}

export function saveCarrier(carrier) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return carrierApi.saveCarrier(carrier).then(savedCarrier => {
            carrier.id ? dispatch(updateCarriersSuccess(savedCarrier)) :
                dispatch(createCarriersSuccess(savedCarrier));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function deleteCarrier(carrierId) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return carrierApi.deleteCarrier(carrierId).then(deletedCarrierId => {
            dispatch(deleteCarriersSuccess(deletedCarrierId));
        }).catch(error => {
            throw (error);
        });
    };
}