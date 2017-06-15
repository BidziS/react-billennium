import React, {PropTypes} from 'react';
import ConfirmModal from '../../common/ConfirmModal';


const AuthorForm = ({hide, isOpen, author,
                          onClose, onUpdate, onSave,
                          isConfirmModalOpen, isConfirmModalHide,
                          onConfirmSave, countries, onSelect, words, confirmWords}) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div>

            <div className="backdrop-style categories">
                <div className={hide ? 'modal-content categories' : 'modal-content-back categories'}>
                    <div>{words.header}</div>
                    <hr />
                    <form >
                        <label>{words.name}</label>
                        <input className="form-input" name="name" placeholder="name" type="text" value={author.name} onChange={onUpdate} />
                        <label>{words.surname}</label>
                        <input className="form-input" name="surname" placeholder="surname" type="text" value={author.surname} onChange={onUpdate} />
                        <label>{words.country}</label>
                        <select className="form-input" onChange={onSelect} value={countries.filter(country => country.id === author.countryId)[0].id}>
                            {countries.map(country => <option key={country.id} id={country.id}
                                                                      value={country.id}>{country.name + ' '}
                                                                      </option>)}
                        </select>
                        <input type="submit" value={words.add_edit_item_button} className="form-button login" onClick={onConfirmSave}/>
                    </form>
                    <div className="footer">
                        <button className="form-button abort" onClick={onClose}>
                            {words.abort_add_edit_item_button}
                        </button>
                    </div>
                </div>
            </div>
            <ConfirmModal isOpen={isConfirmModalOpen} hide={isConfirmModalHide} onClose={onConfirmSave} onAction={onSave} words={confirmWords}/>
        </div>

    );
};

AuthorForm.propTypes = {
    hide: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    author: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    isConfirmModalOpen: PropTypes.bool.isRequired,
    isConfirmModalHide: PropTypes.bool.isRequired,
    onConfirmSave: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    countries: PropTypes.array.isRequired,
    words: PropTypes.object.isRequired,
    confirmWords: PropTypes.object.isRequired

};

export default AuthorForm;
