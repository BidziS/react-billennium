import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function carrierReducer(state = initialState.carriers, action) {
    switch (action.type){
        case types.LOAD_CARRIERS_SUCCESS:
            return action.carriers;
        case types.CREATE_CARRIER_SUCCESS:
            return[
                ...state,
                Object.assign({}, action.carrier)
            ];
        case types.UPDATE_CARRIER_SUCCESS:
            return[
                ...state.filter(carrier => carrier.id !== action.carrier.id),
                Object.assign({}, action.carrier)
            ];
        case types.DELETE_CARRIER_SUCCESS:
            return [
                ...state.filter(carrier => carrier.id !== action.carrierId)
            ];
        default:
            return state;
    }
}
