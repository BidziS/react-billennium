import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const MostPopularBookListRow = ({book, author, category, onOpenBookDetails, words}) => {
    return (
        <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10" value={book} id={book.id}>
            <a onClick={onOpenBookDetails} value={book} id={book.id}>
                <div className="item-homepage" id={book.id}>
                    <div className="row" id={book.id}>
                        <div className="col-md-3 col-lg-3 col-xs-3" id={book.id}>
                            <img src={book.cover}
                                 alt="boohoo" className="img-homepage" id={book.id}/>
                        </div>
                        <div className="col-md-9 col-lg-9 col-xs-9 item-description" id={book.id}>
                            <h4 id={book.id}>{book.title}</h4>
                            <br/>
                            <h5 id={book.id}>{words.home_page.homepage_item.author}: {author.name + ' ' + author.surname}</h5>
                            <br/>
                            <h5 id={book.id} >{words.home_page.homepage_item.isbn}: {book.isbn}</h5>
                            <br/>
                            <h5 id={book.id}>{words.home_page.homepage_item.category}: {category.name}</h5>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

MostPopularBookListRow.propTypes = {
    book: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
    category: PropTypes.object.isRequired,
    onOpenBookDetails: PropTypes.func.isRequired,
    words: PropTypes.object.isRequired
};


export default MostPopularBookListRow;
