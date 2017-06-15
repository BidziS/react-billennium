/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {loadState, saveState} from './store/localStorage';
import configureStore from './store/configureStore';
import {loadBooks} from './actions/bookAction';
import {loadWords} from './actions/languageActions';
import {loadUsers} from './actions/userAction';
import {loadCategories} from './actions/categoryAction';
import {loadCarriers} from './actions/carrierAction';
import routes from './routes';
import './styles/global-styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import initialState from './reducers/initialState';

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : initialState;
persistedState.ajaxCallsInProgress = 0;
const store = configureStore(persistedState);
// store.dispatch(loadBooks());
// store.dispatch(loadWords());
// store.dispatch(loadUsers());
// store.dispatch(loadCategories());
// store.dispatch(loadCarriers());

store.subscribe(() => {
    saveState(store.getState({
        categories: store.getState().categories
    }));
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
