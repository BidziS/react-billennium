import languageApi from '../api/mockLanguageApi';
import coverApi from '../api/coverApi';
import bookApi from '../api/bookApi';
import carrierApi from '../api/carrierApi';
import categoryApi from '../api/categoryApi';
import userApi from '../api/userApi';
import countryApi from '../api/countryApi';
import authorApi from '../api/authorApi';

export default {
    authors:authorApi.getInitialState(),
    books: bookApi.getInitialState(),
    newestBooks: bookApi.getInitialState(),
    recentWatchedBooks: [],
    words: languageApi.getInitialState(),
    users: userApi.getInitialState(),
    categories: categoryApi.getInitialState(),
    carriers: carrierApi.getInitialState(),
    covers: coverApi.getInitialState(),
    currentUser: {},
    countries: countryApi.getInitialState(),
    ajaxCallsInProgress: 0,
    errorInformation: ''
};