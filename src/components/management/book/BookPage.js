import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../../../actions/bookAction';
import BookList from './BookList';
import BookForm from './BookForm';
import {Link, browserHistory} from 'react-router';

import './book-style.scss';

class BookPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleBookDelete = this.handleBookDelete.bind(this);
        this.handleToggleModal = this.handleToggleModal.bind(this);
        this.handleUpdateField = this.handleUpdateField.bind(this);
        this.handleSaveBook = this.handleSaveBook.bind(this);
        this.handleEditBook = this.handleEditBook.bind(this);
        this.handleConfirmSave = this.handleConfirmSave.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleConfirmDelete = this.handleConfirmDelete.bind(this);

        this.state = {
            isOpen: false, hide: false,
            isConfirmModalOpen: false, hideConfirmDialog: false,
            book: Object.assign({}, this.props.book),
            bookToDeleteId: 0
        };
    }

    componentDidMount() {
        if(Object.keys(this.props.currentUser).length === 0){
            browserHistory.push('/');
        }
    }
    handleBookDelete(event) {
        event.preventDefault();
        this.props.actions.deleteBook(this.state.bookToDeleteId);
        this.setState({
            hideConfirmDialog: !this.state.hideConfirmDialog
        });
        setTimeout(() => {
            this.setState({
                isConfirmModalOpen : !this.state.isConfirmModalOpen
            });
        }, 300);
    }

    handleUpdateField(event) {
        const field = event.target.name;
        let book = this.state.book;
        book[field] = event.target.value;
        return this.setState({book: book});
    }

    handleConfirmSave(event) {
        event.preventDefault();
        this.setState({
            hideConfirmDialog: !this.state.hideConfirmDialog
        });
        this.setState({
            isConfirmModalOpen: !this.state.isConfirmModalOpen
        });

    }
    handleConfirmDelete(event) {
        let bookId = parseInt(event.target.id);
        this.setState({
            bookToDeleteId: bookId
        });
        this.setState({
            hideConfirmDialog: !this.state.hideConfirmDialog
        });
        this.setState({
            isConfirmModalOpen: !this.state.isConfirmModalOpen
        });

    }

    handleSaveBook(event) {
        event.preventDefault();
        this.props.actions.saveBook(this.state.book);
        let book = {id: '', title: '', authorId: 1, isbn: '', categoryId: 1, coverId: 1, carrierId: 1,price: '', cover: ''};
        this.setState({
            book: book
        });
        this.setState({
            hideConfirmDialog: !this.state.hideConfirmDialog
        });
        setTimeout(() => {
            this.setState({
                isConfirmModalOpen: !this.state.isConfirmModalOpen
            });

            this.setState({
                hide: !this.state.hide
            });
            setTimeout(() => {
                this.setState({
                    isOpen: !this.state.isOpen
                });
            }, 300);

        }, 300);
    }

    handleEditBook(event) {
        const bookId = parseInt(event.target.id);
        const book = this.props.books.filter(book => book.id === bookId);
        this.setState({
            book: Object.assign({},book[0])
        });
        this.handleToggleModal(event);
    }

    handleToggleModal(event) {
        event.preventDefault();
        if (this.state.isOpen) {
            this.setState({
                hide: !this.state.hide
            });
            setTimeout(() => {
                this.setState({
                    isOpen: !this.state.isOpen
                });
            }, 300);
            let book = {id: '', title: '', authorId: 1, isbn: '', categoryId: 1, coverId: 1, carrierId: 1,price: '', cover: 'http://www.3ammagazine.com/3am/wp-content/uploads/2015/05/IKB_191.jpg'};
            this.setState({
               book: book
            });
            return;
        }
        this.setState({
            hide: !this.state.hide
        });
        this.setState({
            isOpen: !this.state.isOpen
        });

    }
    handleSelectChange(event) {
        const field = event.target.name;
        let book = this.state.book;
        book[field] = parseInt(event.target.value);
        this.setState({
            book: book
        });
    }

    render() {
        return (
            <div>
                <BookList books={this.props.books} authors={this.props.authors}
                          categories={this.props.categories} covers={this.props.covers}
                          carriers={this.props.carriers} onDelete={this.handleBookDelete}
                          onModalOpen={this.handleToggleModal} onEdit={this.handleEditBook}
                          words={this.props.words} isConfirmModalHide={this.state.hideConfirmDialog}
                          isConfirmModalOpen={this.state.isConfirmModalOpen} onConfirmModalToggle={this.handleConfirmDelete}/>
                <BookForm hide={this.state.hide} isOpen={this.state.isOpen}
                          book={this.state.book} onClose={this.handleToggleModal}
                          onUpdate={this.handleUpdateField} onSave={this.handleSaveBook}
                          isConfirmModalOpen={this.state.isConfirmModalOpen} isConfirmModalHide={this.state.hideConfirmDialog}
                          onConfirmSave={this.handleConfirmSave} onSelect={this.handleSelectChange}
                          authors={this.props.authors} categories={this.props.categories}
                          carriers={this.props.carriers} covers={this.props.covers}
                          words={this.props.words.add_edit_book} confirmWords={this.props.words.confirm_add_edit_item}/>
            </div>
        );
    }
}

BookPage.propTypes = {
    books: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    covers: PropTypes.array.isRequired,
    carriers: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    words: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired
};

function getBookById(books, id) {
    const book = books.filter(book => book.id == id);
    if (book.length) return book[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const bookId = ownProps.params.id;

    let book = {id: '', title: '', authorId: 1, isbn: '', categoryId: 1, coverId: 1, carrierId: 1,price: '', cover: 'http://www.3ammagazine.com/3am/wp-content/uploads/2015/05/IKB_191.jpg'};

    if (bookId && state.books.length > 0) {
        book = getBookById(state.books, bookId);
    }

    return {
        books: state.books,
        authors: state.authors,
        categories: state.categories,
        covers: state.covers,
        carriers: state.carriers,
        book: book,
        words: state.words,
        currentUser: state.currentUser
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bookActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
