import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function bookReducer(state = initialState.recentWatchedBooks, action) {
    switch (action.type){
        case types.ADD_BOOK_TO_RECENT_WATCHED_SUCCESS: {
            let newState = state.slice();
            newState.splice(action.book.id, 1);
            newState.unshift(action.book);
            return newState;
        }
        case types.LOAD_RECENT_WATCHED_BOOKS_SUCCESS:
            return action.recentWatchedBooks;

        default:
            return state;
    }
}