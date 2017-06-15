import delay from './delay';

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

const categories = [
    {
        id: 1,
        name: 'Fantastyka'

    },
    {
        id: 2,
        name: 'Sci-fi'

    },
    {
        id: 3,
        name: 'Kryminał'

    },
    {
        id: 4,
        name: 'Kryminał'

    },
    {
        id: 5,
        name: 'Kryminał'

    },
    {
        id: 6,
        name: 'Kryminał'

    },
    {
        id: 7,
        name: 'Kryminał'

    },
    {
        id: 8,
        name: 'Kryminał'

    },
    {
        id: 9,
        name: 'Kryminał'

    },
    {
        id: 10,
        name: 'Kryminał'

    },
    {
        id: 11,
        name: 'Kryminał'

    },
    {
        id: 12,
        name: 'Kryminał'

    },
    {
        id: 13,
        name: 'Kryminał'

    },
    {
        id: 14,
        name: 'Kryminał'

    }
];

const generateId = () => {

    return persistedState.categories.length ? Math.max(0, ...persistedState.categories.map(c => c.id)) + 1 : 1;
};

class CategoryApi {
    static getAllCategories() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], persistedState.categories));
            }, delay);
        });
    }

    static saveCategory(category) {
        category = Object.assign({}, category);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCategoryNameLength = 3;
                if (category.name.length < minCategoryNameLength) {
                    reject(`Category name must be at least ${minCategoryNameLength} characters.`);
                }

                if (category.id) {
                    const existingCategoryIndex = persistedState.categories.findIndex(a => a.id === category.id);
                    persistedState.categories.splice(existingCategoryIndex, 1, category);
                } else {
                    category.id = generateId(category);
                    persistedState.categories.push(category);
                }
                resolve(category);
            }, delay);
        });
    }

    static deleteCategory(categoryId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfCategoryToDelete = categories.findIndex(category =>
                    category.id == categoryId
                );
                persistedState.categories.splice(indexOfCategoryToDelete, 1);
                resolve(categoryId);
            }, delay);
        });
    }
    static getInitialState(){
        return Object.assign([], categories);
    }
}

export default CategoryApi;
