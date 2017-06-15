import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function languageReducer(state = initialState.words, action) {
    switch (action.type){
        case types.LOAD_POLISHWORDS_SUCCESS:
            return action.words;
        default:
            return state;
    }
}