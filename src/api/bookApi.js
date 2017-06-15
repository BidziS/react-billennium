import delay from './delay';

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

const books = [
    {
        id: 1,
        title: 'Wiedźmin. Czas pogardy.',
        authorId: 1,
        isbn: 'jakis-tam',
        categoryId: 1,
        carrierId: 1,
        coverId: 1,
        price: 17,
        cover: 'https://naekranie.pl/wp-content/uploads/2014/12/czas_pogardy_nowa_edycja_large-1413970597.jpg',
        soldQuantity: 4
    },
    {
        id: 2,
        title: 'Wiedźmin. Czas pogardy.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'https://naekranie.pl/wp-content/uploads/2014/12/czas_pogardy_nowa_edycja_large-1413970597.jpg',
        soldQuantity: 6
    },
    {
        id: 3,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 4,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 5,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 6,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 7,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 8,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 9,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 10,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 11,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 12,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 13,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 14,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 15,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 16,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 17,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 18,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 19,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 20,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 21,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 22,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    },
    {
        id: 23,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 2
    }

];
const recentWatchedBooks = [];
const generateId = () => {
    return persistedState.books.length ? Math.max(0, ...persistedState.books.map(c => c.id)) + 1 : 1;
};

class BookApi {
    static getAllBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], persistedState.books));
            }, delay);
        });
    }

    static getAllBooksBySoldQuantity() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], persistedState.books.sort((a, b) => {
                    return b.soldQuantity - a.soldQuantity
                })));
            }, delay);
        });
    }

    static getAllBooksSortedByNewest() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], persistedState.books.sort((a, b) => {
                    return b.id - a.id
                })));
            }, delay);
        });
    }

    static getAllRecentWatchedBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], recentWatchedBooks.reverse()));
            }, delay);
        });
    }

    static saveBook(book) {
        book = Object.assign({}, book);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minBookNameLength = 3;
                if (book.title.length < minBookNameLength) {
                    reject(`Book Name must be at least ${minBookNameLength} characters.`);
                }

                if (book.id) {
                    const existingAuthorIndex = persistedState.books.findIndex(a => a.id === book.id);
                    persistedState.books.splice(existingAuthorIndex, 1, book);
                } else {
                    book.id = generateId(book);
                    persistedState.books.push(book);
                }
                this.getAllBooksSortedByNewest();
                resolve(book);
            }, delay);
        });
    }

    static saveBookToRecentWatched(book) {
        book = Object.assign({}, book);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minBookNameLength = 3;
                if (book.title.length < minBookNameLength) {
                    reject(`Book Name must be at least ${minBookNameLength} characters.`);
                }
                const existingAuthorIndex = persistedState.recentWatchedBooks.findIndex(a => a.id === book.id);
                if(existingAuthorIndex !== -1){
                    persistedState.recentWatchedBooks.splice(existingAuthorIndex, 1);
                    persistedState.recentWatchedBooks.unshift(book);
                }
                else {
                    persistedState.recentWatchedBooks.unshift(book);
                }

                resolve(book);
            }, delay);
        });
    }

    static deleteBook(bookId) {
        books.sort((a, b) => {
            return a.id - b.id
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfBookToDelete = persistedState.books.findIndex(book =>
                    book.id == bookId
                );
                persistedState.books.splice(indexOfBookToDelete, 1);
                resolve(bookId);
            }, delay);
        });
    }

    static getInitialState() {
        return Object.assign([], books);
    }
}

export default BookApi;
