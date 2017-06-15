import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduximmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduximmutableStateInvariant()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );
}
