import delay from './delay';

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

const authors = [
    {
        id: 1,
        name: 'Andrzej',
        surname: 'Sapkowski',
        countryId: 1
    },
    {
        id: 2,
        name: 'J. K.',
        surname: 'Rowling',
        countryId: 2
    },
    {
        id: 3,
        name: 'Stanisław',
        surname: 'Lem',
        countryId: 3
    }
];

const generateId = () => {
    return persistedState.authors.length ? Math.max(0, ...persistedState.authors.map(c => c.id)) + 1 : 1;
};

class AuthorApi {
    static getAllAuthors() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], persistedState.authors));
            }, delay);
        });
    }

    static saveAuthor(author) {
        author = Object.assign({}, author);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minAuthorNameLength = 3;
                if (author.name.length < minAuthorNameLength) {
                    reject(`Author name must be at least ${minAuthorNameLength} characters.`);
                }

                if (author.id) {
                    const existingAuthorIndex = persistedState.authors.findIndex(a => a.id === author.id);
                    persistedState.authors.splice(existingAuthorIndex, 1, author);
                } else {
                    author.id = generateId(author);
                    persistedState.authors.push(author);
                }
                resolve(author);
            }, delay);
        });
    }

    static deleteAuthor(authorId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfAuthorToDelete = persistedState.authors.findIndex(author => {
                    author.id == authorId;
                });
                persistedState.authors.splice(indexOfAuthorToDelete, 1);
                resolve(authorId);
            }, delay);
        });
    }

    static getInitialState() {
        return Object.assign([], authors);
    }
}

export default AuthorApi;
