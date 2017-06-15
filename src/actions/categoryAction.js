import * as types from './actionTypes';
import categoryApi from '../api/categoryApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';

export function loadCategoriesSuccess(categories) {
    return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
}

export function createCategorySuccess(category) {
    return {type: types.CREATE_CATEGORY_SUCCESS, category};
}

export function updateCategorySuccess(category) {
    return {type: types.UPDATE_CATEGORY_SUCCESS, category};
}

export function deleteCategorySuccess(categoryId) {
    return {type: types.DELETE_CATEGORY_SUCCESS, categoryId};
}

export function loadCategories() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return categoryApi.getAllCategories().then(categories => {
            dispatch(loadCategoriesSuccess(categories));
        }).catch(error => {
            throw (error);
        });
    };
}

export function saveCategory(category) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return categoryApi.saveCategory(category).then(savedCategory => {
            category.id ? dispatch(updateCategorySuccess(savedCategory)) :
                dispatch(createCategorySuccess(savedCategory));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function deleteCategory(categoryId) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return categoryApi.deleteCategory(categoryId).then(deletedCategoryId => {
            dispatch(deleteCategorySuccess(deletedCategoryId));
        }).catch(error => {
            throw (error);
        });
    };
}