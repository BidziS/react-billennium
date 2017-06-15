import { combineReducers } from 'redux';
import books from './booksReducer';
import words from './languageReducer';
import users from './userReducer';
import currentUser from './loginReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import categories from './categoryReducer';
import carriers from './carrierReducer';
import covers from './coverReducer';
import countries from './countryReducer';
import authors from './authorReducer';
import errorInformation from './onErrorReducer';
import newestBooks from './newestBookReducer';
import recentWatchedBooks from './recentWatchedBooksReducer';

const rootReducer = combineReducers({
    books,
    words,
    users,
    currentUser,
    ajaxCallsInProgress,
    categories,
    carriers,
    covers,
    countries,
    authors,
    errorInformation,
    newestBooks,
    recentWatchedBooks
});

export default rootReducer;
