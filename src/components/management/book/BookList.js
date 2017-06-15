import React, {PropTypes} from 'react';
import BookListRow from './BookListRow';
import ConfirmModal from '../../common/ConfirmModal';

class BookList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {itemsOnPage: 1, currentPage: 1, searchString: ''};

        this.handleClick = this.handleClick.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSearchStringChange = this.handleSearchStringChange.bind(this);

    }

    handleClick(event) {
        if (event.target.value === "prev" && this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        } else if (event.target.value === "next" && this.state.currentPage < Math.ceil(this.props.books.length / this.state.itemsOnPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        } else if (event.target.value === "prev" || event.target.value === "next") {
            //nothing
        }
        else {
            this.setState({
                currentPage: Number(event.target.value)
            });
        }
    }

    handleSelectChange(event) {
        this.setState({
            itemsOnPage: Number(event.target.value)
        });
        if (this.state.currentPage > this.state.itemsOnPage) {
            this.setState({
                currentPage: this.state.itemsOnPage
            });
        }
    }

    handleSearchStringChange(event){
        let search = event.target.value;
        return this.setState({searchString: search});
    }

    render() {
        const {itemsOnPage, currentPage, searchString} = this.state;
        let filteredItems = this.props.books.filter((item) => {
            return item.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
        });
        // Logic for displaying current todos
        const indexOfLastItem = currentPage * itemsOnPage;
        const indexOfFirstItem = indexOfLastItem - itemsOnPage;
        const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
        let numberOfPages = Math.ceil(filteredItems.length / itemsOnPage);

        const pageNumbers = [];
        for (let i = 1; i <= numberOfPages; i++) {
            pageNumbers.push(i);
        }
        const numbersOfElements = [];
        for (let i = 1; i <= filteredItems.length; i++) {
            numbersOfElements.push(i);
        }

        return (
            <div id="container">
                <div className="homepage-container">
                    {this.props.words.manage_books.header}
                    <button className="btn btn-success btn-header" onClick={this.props.onModalOpen}>{this.props.words.manage_books.add_new_book_button}</button>
                    <hr />
                </div>
                <div className="container">
                    <div className="table-container-authors">
                        <div className="search-container">
                            <input className="search-input" onChange={this.handleSearchStringChange} value={searchString}/>
                        </div>
                        <table className="table table-bordered table-responsive table-hover table-fixed books-table">
                            <thead>
                            <tr className="bg-primary">
                                <th>{this.props.words.manage_books.table_fields.title}</th>
                                <th>{this.props.words.manage_books.table_fields.author}</th>
                                <th>{this.props.words.manage_books.table_fields.category}</th>
                                <th>{this.props.words.manage_books.table_fields.carrier}</th>
                                <th>{this.props.words.manage_books.table_fields.cover}</th>
                                <th>{this.props.words.manage_books.table_fields.price}</th>
                                <th>{this.props.words.manage_books.table_fields.isbn}</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentItems.map(book =>
                                <BookListRow key={book.id} book={book}
                                             onDelete={this.props.onConfirmModalToggle} onEdit={this.props.onEdit}
                                             categories={this.props.categories} carriers={this.props.carriers}
                                             covers={this.props.covers} authors={this.props.authors}/>
                            )}
                            </tbody>
                        </table>
                        <div className="change-table-number">
                            <button className="btn btn-sm change-table-number-button" value="prev" onClick={this.handleClick}>&lt;</button>
                            <input className="table-number" onChange={this.handleClick} type="text"
                                   value={currentPage}/>
                            {this.props.words.manage_books.table_site_quantity+numberOfPages}
                            <button className="btn btn-sm change-table-number-button" value="next" onClick={this.handleClick}>&gt;</button>
                            <div>
                                {this.props.words.manage_books.items_on_table}
                            </div>
                            <select onChange={this.handleSelectChange}>
                                {numbersOfElements.map(element => <option key={element}
                                                                          value={element}>{element}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
                <ConfirmModal isOpen={this.props.isConfirmModalOpen} hide={this.props.isConfirmModalHide} onClose={this.props.onConfirmModalToggle}
                              onAction={this.props.onDelete} words={this.props.words.confirm_delete_item}/>
            </div>
        );
    }
}


BookList.propTypes = {
    books: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    covers: PropTypes.array.isRequired,
    carriers: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onModalOpen: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    words: PropTypes.object.isRequired,
    isConfirmModalHide: PropTypes.bool.isRequired,
    onConfirmModalToggle: PropTypes.func.isRequired
};

export default BookList;
