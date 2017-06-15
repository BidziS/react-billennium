import React, {PropTypes} from 'react';
import ConfirmModal from '../../common/ConfirmModal';


const BookForm = ({
                      hide, isOpen, book,
                      onClose, onUpdate, onSave,
                      isConfirmModalOpen, isConfirmModalHide,
                      onConfirmSave, onSelect, authors,
                      categories, carriers, covers, words, confirmWords
                  }) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div>

            <div className="backdrop-style categories">
                <div className={hide ? 'modal-content categories' : 'modal-content-back categories'}>
                    <div>{words.header}</div>
                    <hr />
                    <form id="0">
                        <label>{words.title}</label>
                        <input className="form-input" name="title" placeholder="title" type="text" value={book.title}
                               onChange={onUpdate}/>
                        <label>{words.author}</label>
                        <select className="form-input" name="authorId" onChange={onSelect}
                                value={authors.filter(author => author.id === book.authorId)[0].id}>
                            {authors.map(author => <option key={author.id} id={author.id}
                                                              value={author.id}>{author.name + ' '}
                            </option>)}
                        </select>
                        <label>{words.category}</label>
                        <select className="form-input" name="categoryId" onChange={onSelect}
                                value={categories.filter(category => category.id === book.categoryId)[0].id}>
                            {categories.map(category => <option key={category.id} id={category.id}
                                                           value={category.id}>{category.name + ' '}
                            </option>)}
                        </select>
                        <label>{words.cover}</label>
                        <select className="form-input" name="coverId" onChange={onSelect}
                                value={covers.filter(cover => cover.id === book.coverId)[0].id}>
                            {covers.map(cover => <option key={cover.id} id={cover.id}
                                                                value={cover.id}>{cover.name + ' '}
                            </option>)}
                        </select>
                        <label>{words.carrier}</label>
                        <select className="form-input" name="carrierId" onChange={onSelect}
                                value={carriers.filter(carrier => carrier.id === book.carrierId)[0].id}>
                            {carriers.map(carrier => <option key={carrier.id} id={carrier.id}
                                                         value={carrier.id}>{carrier.name + ' '}
                            </option>)}
                        </select>
                        <label>{words.price}</label>
                        <input className="form-input" name="price" placeholder="price" type="text" value={book.price}
                               onChange={onUpdate}/>
                        <label>{words.isbn}</label>
                        <input className="form-input" name="isbn" placeholder="isbn" type="text" value={book.isbn}
                               onChange={onUpdate}/>
                        <label>Url</label>
                        <input className="form-input" name="cover" placeholder="cover" type="text" value={book.cover}
                               onChange={onUpdate}/>
                        <input type="submit" value={words.add_edit_item_button} id="0" className="form-button login"
                               onClick={onConfirmSave}/>
                    </form>
                    <div className="footer">
                        <button className="form-button abort" onClick={onClose}>
                            {words.abort_add_edit_item_button}
                        </button>
                    </div>
                </div>
            </div>
            <ConfirmModal isOpen={isConfirmModalOpen} hide={isConfirmModalHide} onClose={onConfirmSave}
                          onAction={onSave} words={confirmWords}/>
        </div>

    );
};

BookForm.propTypes = {
    hide: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    book: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    isConfirmModalOpen: PropTypes.bool.isRequired,
    isConfirmModalHide: PropTypes.bool.isRequired,
    onConfirmSave: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    authors: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    carriers: PropTypes.array.isRequired,
    covers: PropTypes.array.isRequired,
    words: PropTypes.object.isRequired,
    confirmWords: PropTypes.object.isRequired

};

export default BookForm;
