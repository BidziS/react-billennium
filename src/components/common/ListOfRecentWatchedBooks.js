import React, {PropTypes} from 'react';

const ListOfRecentWatchedBooks = ({recentWatchedBooks,isOpen}) => {
    return (
        <div
            className={isOpen ? "dropdown-content hover flex-container" : "dropdown-content flex-container"}>
            {recentWatchedBooks.map(book =>
                <div key={book.id} className="list-item-container col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    {/*<Link to="/about">*/}
                    <div className="list-item">
                        <div className="row">
                            <div className="col-md-2 col-lg-2 col-xs-2">
                                <img src={book.cover}
                                     alt="boohoo" className="img-item-list"/>
                            </div>
                            <div className="col-md-10 col-lg-10 col-xs-10 item-description">
                                <div className="item-list-title">{book.title}</div>
                            </div>
                        </div>
                    </div>
                    {/*</Link>*/}
                </div>
            )}
        </div>
    );
};

ListOfRecentWatchedBooks.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    recentWatchedBooks: PropTypes.array.isRequired
};

export default ListOfRecentWatchedBooks;