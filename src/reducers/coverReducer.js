import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function coverReducer(state = initialState.covers, action) {
    switch (action.type){
        case types.LOAD_COVERS_SUCCESS:
            return action.covers;
        case types.CREATE_COVER_SUCCESS:
            return[
                ...state,
                Object.assign({}, action.cover)
            ];
        case types.UPDATE_COVER_SUCCESS:
            return[
                ...state.filter(cover => cover.id !== action.cover.id),
                Object.assign({}, action.cover)
            ];
        case types.DELETE_COVER_SUCCESS:
            return [
                ...state.filter(cover => cover.id !== action.coverId)
            ];
        default:
            return state;
    }
}
