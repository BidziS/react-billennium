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
        price: 60,
        cover: 'https://naekranie.pl/wp-content/uploads/2014/12/czas_pogardy_nowa_edycja_large-1413970597.jpg',
        soldQuantity: 999
    },
    {
        id: 2,
        title: 'Wiedźmin. Sezon Burz.',
        authorId: 1,
        isbn: 'jakis-tam',
        categoryId: 1,
        carrierId: 2,
        coverId: 2,
        price: 210,
        cover: 'http://ecsmedia.pl/c/wiedzmin-tom-8-sezon-burz-b-iext44044949.jpg',
        soldQuantity: 6
    },
    {
        id: 3,
        title: 'Harry Potter i komnata tajemnic.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 1,
        carrierId: 1,
        coverId: 1,
        price: 170,
        cover: 'http://hogsmeade.pl/images/photoalbum/album_20/52444106f1564a52f46dda029788b628.jpg',
        soldQuantity: 33
    },
    {
        id: 4,
        title: 'Bajki Robotów.',
        authorId: 3,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 50,
        cover: 'http://ecsmedia.pl/c/bajki-robotow-b-iext34522977.jpg',
        soldQuantity: 1
    },
    {
        id: 5,
        title: 'Harry Potter i kamień filozoficzny.',
        authorId: 1,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 300,
        cover: 'http://ecsmedia.pl/c/harry-potter-tom-2-harry-potter-i-komnata-tajemnic-b-iext48514102.jpg',
        soldQuantity: 55
    },
    {
        id: 6,
        title: 'Harry Potter i więzień azkabanu.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 1,
        carrierId: 2,
        coverId: 2,
        price: 99,
        cover: 'http://vignette2.wikia.nocookie.net/harrypotter/images/f/fa/HarryPotteriWi%C4%99zie%C5%84AzkabanuKSIAZKA_%28by_Urbanski97%29.jpg/revision/latest?cb=20130105213254&path-prefix=pl',
        soldQuantity: 11
    },
    {
        id: 7,
        title: 'Harry Potter i książe półkrwi.',
        authorId: 1,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 88,
        cover: 'https://mediarodzina.pl/zasoby/images/vbig/harry_potter_i_ksiaze_polkrwi.jpg',
        soldQuantity: 28
    },
    {
        id: 8,
        title: 'Harry Potter i zakon feniksa.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 1,
        carrierId: 2,
        coverId: 2,
        price: 20,
        cover: 'http://vignette4.wikia.nocookie.net/harrypotter/images/d/df/HarryPotteriZakonFeniksaKSIAZKA_%28by_Urbanski97%29.jpg/revision/latest?cb=20130105214222&path-prefix=pl',
        soldQuantity: 15
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
