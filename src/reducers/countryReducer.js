import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function countryReducer(state = initialState.countries, action) {
    switch (action.type){
        default:
            return state;
    }
}
