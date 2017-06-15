import React, {PropTypes} from 'react';
import MostPopularBookListRow from './MostPopularBooksListRow';

const MostPopularBookList = ({books, authors, categories, onOpenBookDetails, words}) => {
    return (

            <div id="homepage">
                <div className="homepage-container">
                    <h4>{words.home_page.header}</h4>
                    <hr />
                </div>
                <div className="flex-container">
                    {books.map(book =>
                        <MostPopularBookListRow key={book.id} book={book}
                                                author={authors.filter(a => a.id === book.authorId)[0]}
                                                category={categories.filter(c => c.id === book.categoryId)[0]}
                                                onOpenBookDetails={onOpenBookDetails}
                                                words={words}/>
                    )}
                </div>
            </div>
    );
};

MostPopularBookList.propTypes = {
    books: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    onOpenBookDetails: PropTypes.func.isRequired,
    words: PropTypes.object.isRequired

};

export default MostPopularBookList;
