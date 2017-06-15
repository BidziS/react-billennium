import React, {PropTypes} from 'react';

const ConfirmModal = ({isOpen, hide, onAction, onClose, words}) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="backdrop-style categories">
            <div className={hide ? 'modal-content categories' : 'modal-content-back categories'}>
                <div>{words.message}</div>
                <hr />
                <div className="footer">
                    <button id="apply" className="form-button btn-success" onClick={onAction}>
                        {words.apply}
                    </button>
                    <button id="cancel" className="form-button abort" onClick={onClose}>
                        {words.canel}
                    </button>
                </div>
            </div>
        </div>
    );
};

ConfirmModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    hide: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onAction: PropTypes.func.isRequired,
    words: PropTypes.object.isRequired
};

export default ConfirmModal;
