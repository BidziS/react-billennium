import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function bookReducer(state = initialState.books, action) {
    switch (action.type){
        case types.LOAD_BOOKS_SUCCESS:
            return action.books;
        case types.CREATE_BOOK_SUCCESS:
            return[
                ...state,
                Object.assign({}, action.book)
            ];
        case types.UPDATE_BOOK_SUCCESS:
            return[
                ...state.filter(author => author.id !== action.book.id),
                Object.assign({}, action.book)
            ];
        case types.DELETE_BO0K_SUCCESS:
            return [
                ...state.filter(book => book.id !== action.deletedBookId)
            ];
        case types.LOAD_BOOKS_BY_QUANTITY_SUCCESS:
            return action.books;
        default:
            return state;
    }
}