import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.categories, action) {
    switch (action.type){
        case types.LOAD_CATEGORIES_SUCCESS:
            return action.categories;
        case types.CREATE_CATEGORY_SUCCESS:
            return[
                ...state,
                Object.assign({}, action.category)
            ];
        case types.UPDATE_CATEGORY_SUCCESS:
            return[
                ...state.filter(category => category.id !== action.category.id),
                Object.assign({}, action.category)
            ];
        case types.DELETE_CATEGORY_SUCCESS:
            return [
                ...state.filter(category => category.id !== action.categoryId)
            ];


        default:
            return state;
    }
}
