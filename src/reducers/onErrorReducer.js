import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function ajaxStatusReducer(state = initialState.errorInformation, action) {
    if(action.type == types.THROW_ERROR){
        return action.errorInformation;
    } else if(action.type == types.EXIT_ERROR){
        return '';
    }
    return state;
}
