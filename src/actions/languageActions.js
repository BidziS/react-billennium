import * as types from './actionTypes';
import languageApi from '../api/mockLanguageApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';
export function loadPolishWordsSuccess(words) {
    return { type: types.LOAD_POLISHWORDS_SUCCESS, words };
}

export function loadWords(flag) {
    if(flag === 'pl' || flag === undefined){
        return function (dispatch) {
            dispatch(beginAjaxCall());
            return languageApi.getPolishWords().then(words => {
                dispatch(loadPolishWordsSuccess(words));
            }).catch(error => {
                throw (error);
            });
        };
    }else if(flag === 'en') {
        return function (dispatch) {
            dispatch(beginAjaxCall());
            return languageApi.getEnglishWords().then(words => {
                dispatch(loadPolishWordsSuccess(words));
            }).catch(error => {
                throw (error);
            });
        };
    }

}