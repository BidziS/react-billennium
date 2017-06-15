import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../../actions/bookAction';

const BookDetails = ({book, onClose, show, hide, authors, categories, covers, carriers, words}) =>  {

        // Render nothing if the "show" prop is false
        if (!show) {
            return null;
        }
        return (
            <div>
                <div className="backdrop-style categories">
                    <div className={hide ? 'modal-content books' : 'modal-content-back books'}>
                        <div>{words.book_details.header}</div>
                        <hr />
                        <form readOnly >
                            <label>{words.book_details.title}</label>
                            <input disabled className="form-input" name="title" placeholder="title" type="text" value={book.title}
                                   />
                            <label>{words.book_details.author}</label>
                            <input className="form-input" name="authorId"
                                    value={authors.filter(author => author.id === book.authorId)[0].name +" "+authors.filter(author => author.id === book.authorId)[0].surname}>
                            </input>
                            <label>{words.book_details.category}</label>
                            <input className="form-input" name="categoryId"
                                    value={categories.filter(category => category.id === book.categoryId)[0].name} />
                            <label>{words.book_details.cover}</label>
                            <input className="form-input" name="coverId"
                                    value={covers.filter(cover => cover.id === book.coverId)[0].name}/>
                            <label>{words.book_details.carrier}</label>
                            <input className="form-input" name="carrierId"
                                    value={carriers.filter(carrier => carrier.id === book.carrierId)[0].name} />
                            <label>{words.book_details.price}</label>
                            <input className="form-input" name="price" placeholder="price" type="text" value={book.price}
                                   />
                            <label>{words.book_details.isbn}</label>
                            <input className="form-input" name="isbn" placeholder="isbn" type="text" value={book.isbn}
                                   />
                        </form>
                        <div className="footer">
                            <button className="form-button abort" onClick={onClose}>
                                Zamknij
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
};

BookDetails.propTypes = {
    onClose: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired,
    hide: React.PropTypes.bool.isRequired,
    book: PropTypes.object.isRequired,
    //actions: PropTypes.object.isRequired,
    words: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    covers: PropTypes.array.isRequired,
    carriers: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    addToRecent: PropTypes.func
};






export default BookDetails;