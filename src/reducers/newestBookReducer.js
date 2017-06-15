import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function bookReducer(state = initialState.newestBooks, action) {
    switch (action.type){
        case types.LOAD_BOOKS_SORTED_BY_NEWEST_SUCCESS:
            return action.newestBooks;
        default:
            return state;
    }
}