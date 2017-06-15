import React, {PropTypes} from 'react';
import ConfirmModal from '../../common/ConfirmModal';


const CategoryForm = ({hide, isOpen, category, onClose, onUpdate, onSave, isConfirmModalOpen, isConfirmModalHide, onConfirmSave, words, confirmWords}) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div>

            <div className='backdrop-style categories'>
                <div className={hide ? 'modal-content categories' : 'modal-content-back categories'}>
                    <div>{words.header}</div>
                    <hr />
                    <form >
                        <label>{words.name}</label>
                        <input className="form-input" name="name" placeholder="name" type="text" value={category.name} onChange={onUpdate} />
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

CategoryForm.propTypes = {
    hide: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    category: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    isConfirmModalOpen: PropTypes.bool.isRequired,
    isConfirmModalHide: PropTypes.bool.isRequired,
    onConfirmSave: PropTypes.func.isRequired,
    words: PropTypes.object.isRequired,
    confirmWords: PropTypes.object.isRequired

};

export default CategoryForm;
