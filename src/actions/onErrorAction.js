import * as types from './actionTypes';

export function throwError(errorInformation){
    return {type: types.THROW_ERROR, errorInformation};
}

export function exitError(){
    return {type: types.EXIT_ERROR};
}
