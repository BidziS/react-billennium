import React, {PropTypes} from 'react';
import MostPopularBookList from './MostPopularBooksList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as booksActions from '../../actions/bookAction';
import BookDetails from './BookDetails';

import './home-style.scss';


class HomePage extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            isOpen: false, hide: false,
            book: Object.assign({}, this.props.book)
        };
        this.closeBookDetails = this.closeBookDetails.bind(this);
        this.openBookDetails = this.openBookDetails.bind(this);
        this.addToRecentWatched = this.addToRecentWatched.bind(this);
    }
    componentDidMount() {
        this.props.actions.loadAllBooksBySoldQuantity();
    }

    openBookDetails(event){
        let bookId = event.target.id;
        let book = getBookById(this.props.books, parseInt(bookId));
        this.setState({
            book: book,
            isOpen: true,
            hide:true
        });
        this.addToRecentWatched(book);
    }
    closeBookDetails(event){
        event.preventDefault();
        this.setState({
            hide: false
        });
        setTimeout(() => {
            this.setState({
                isOpen: false
            });
        }, 400);
    }
    addToRecentWatched(book){
        this.props.actions.addBookToRecentWatched(book);
    }
    render(){
        const {authors, categories, words} = this.props;


        return (
            <div>
                <MostPopularBookList books={this.props.newestBooks} authors={authors} categories={categories}
                                     onOpenBookDetails={this.openBookDetails} words={words}/>
                <BookDetails onClose={this.closeBookDetails} book={this.state.book}
                             show={this.state.isOpen} hide={this.state.hide}
                             covers={this.props.covers} carriers={this.props.carriers}
                             authors={this.props.authors} categories={this.props.categories}
                             words={this.props.words}/>


            </div>
        );
    }

}

HomePage.propTypes = {
    books: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    covers: PropTypes.array.isRequired,
    carriers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    words: PropTypes.object.isRequired,
    newestBooks: PropTypes.array.isRequired
};

function getBookById(books, id) {
    const book = books.filter(book => book.id == id);
    if (book.length) return book[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const bookId = ownProps.params.id;

    let book = {id: '', title: '', authorId: 1, isbn: '', categoryId: 1, coverId: 1, carrierId: 1,price: '', cover: ''};

    if (bookId && state.books.length > 0) {
        book = getBookById(state.books, bookId);
    }
    return{
        books: state.books,
        book: book,
        words: state.words,
        categories: state.categories,
        covers: state.covers,
        carriers: state.carriers,
        authors: state.authors,
        newestBooks: state.newestBooks
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        actions: bindActionCreators(booksActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchtoProps)(HomePage);
