import * as types from './actionTypes';
import bookApi from '../api/bookApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';
import {throwError, exitError} from './onErrorAction';

export function loadBooksSuccess(books) {
    return { type: types.LOAD_BOOKS_SUCCESS, books };
}

export function loadBooksSortedByNewestSuccess(newestBooks) {
    return { type: types.LOAD_BOOKS_SORTED_BY_NEWEST_SUCCESS, newestBooks };
}

export function loadBooksBySoldQuantitySuccess(books) {
    return { type: types.LOAD_BOOKS_BY_QUANTITY_SUCCESS, books };
}

export function loadRecentWatchedBooks(recentWatchedBooks) {
    return { type: types.LOAD_RECENT_WATCHED_BOOKS_SUCCESS, recentWatchedBooks };
}

export function createBookSuccess(book) {
    return {type: types.CREATE_BOOK_SUCCESS, book};
}

export function addBookToRecentWatchedSuccess(book) {
    return {type: types.ADD_BOOK_TO_RECENT_WATCHED_SUCCESS, book};
}

export function updateBookSuccess(book) {
    return {type: types.UPDATE_BOOK_SUCCESS, book};
}

export function deleteBookSuccess(deletedBookId) {
    return {type: types.DELETE_BO0K_SUCCESS, deletedBookId};
}


export function loadBooks() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return bookApi.getAllBooks().then(books => {
            dispatch(loadBooksSuccess(books));
        }).catch(error => {
            throw (error);
        });
    };
}
export function loadAllBooksBySoldQuantity() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return bookApi.getAllBooksBySoldQuantity().then(books => {
            dispatch(loadBooksBySoldQuantitySuccess(books));
        }).catch(error => {
            throw (error);
        });
    };
}
export function loadAllBooksSortedByNewest() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return bookApi.getAllBooksSortedByNewest().then(newestBooks => {
            dispatch(loadBooksSortedByNewestSuccess(newestBooks));
        }).catch(error => {
            throw (error);
        });
    };
}
export function loadAllRecentWatchedBooks() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return bookApi.getAllRecentWatchedBooks().then(recentWatchedBooks => {
            dispatch(loadRecentWatchedBooks(recentWatchedBooks));
        }).catch(error => {
            throw (error);
        });
    };
}
export function saveBook(book) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        let operation = undefined;
        bookApi.saveBook(book).then(savedBook => {
            operation = book.id ? dispatch(updateBookSuccess(savedBook)) :
                dispatch(createBookSuccess(savedBook));
            dispatch(loadAllBooksSortedByNewest());
            return operation;
        }).catch(error => {
            dispatch(ajaxCallError(error));
            dispatch(throwError(error));

            //throw(error);
        });
    };
}
export function addBookToRecentWatched(book) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return bookApi.saveBookToRecentWatched(book).then(savedBook => {
            dispatch(addBookToRecentWatchedSuccess(savedBook));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            dispatch(throwError(error));

            //throw(error);
        });
    };
}

export function deleteBook(bookId) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return bookApi.deleteBook(bookId).then(deletedBookId => {
            dispatch(deleteBookSuccess(deletedBookId));
        }).catch(error => {
            throw (error);
        });
    };
}
