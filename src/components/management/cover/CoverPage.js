import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as coverActions from '../../../actions/coverAction';
import CoverList from './CoverList';
import CategoryForm from '../category/CategoryForm';

import './cover-style.scss';

class CoverPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleCoverDelete = this.handleCoverDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleUpdateField = this.handleUpdateField.bind(this);
        this.handleSaveCover = this.handleSaveCover.bind(this);
        this.handleEditCover = this.handleEditCover.bind(this);
        this.handleConfirmSave = this.handleConfirmSave.bind(this);
        this.handleConfirmDelete = this.handleConfirmDelete.bind(this);

        this.state = {
            isOpen: false, hide: false,
            isConfirmModalOpen: false, hideConfirmDialog: false,
            cover: Object.assign({}, this.props.cover),
            coverToDeleteId: 0
        };
    }

    handleCoverDelete(event) {
        event.preventDefault();
        this.props.actions.deleteCover(this.state.coverToDeleteId);
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
        let cover = this.state.cover;
        cover[field] = event.target.value;
        return this.setState({cover: cover});
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
        let coverId = parseInt(event.target.id);
        if(coverId !== ""){
            this.setState({
                coverToDeleteId: coverId
            });
        }
        this.setState({
            hideConfirmDialog: !this.state.hideConfirmDialog
        });
        this.setState({
            isConfirmModalOpen: !this.state.isConfirmModalOpen
        });

    }

    handleSaveCover(event) {
        event.preventDefault();
        this.props.actions.saveCover(this.state.cover);
        let cover = {id: '', name: ''};
        this.setState({
            cover: cover
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

    handleEditCover(event) {
        const coverId = parseInt(event.target.id);
        const cover = this.props.covers.filter(cover => cover.id === coverId);
        this.setState({
            cover: Object.assign({},cover[0])
        });
        this.handleClose(event);
    }

    handleClose(event) {
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
            return;
        }
        this.setState({
            hide: !this.state.hide
        });
        this.setState({
            isOpen: !this.state.isOpen
        });

    }

    render() {
        return (
            <div>
                <CoverList covers={this.props.covers} onDelete={this.handleCoverDelete}
                           onModalOpen={this.handleClose} onEdit={this.handleEditCover} words={this.props.words}
                           isConfirmModalHide={this.state.hideConfirmDialog}
                           isConfirmModalOpen={this.state.isConfirmModalOpen} onConfirmModalToggle={this.handleConfirmDelete}/>
                <CategoryForm hide={this.state.hide} isOpen={this.state.isOpen}
                              category={this.state.cover} isConfirmModalOpen={this.state.isConfirmModalOpen}
                              isConfirmModalHide={this.state.hideConfirmDialog} onClose={this.handleClose}
                              onUpdate={this.handleUpdateField} onSave={this.handleSaveCover}
                              onConfirmSave={this.handleConfirmSave} words={this.props.words.add_edit_cover}
                              confirmWords={this.props.words.confirm_add_edit_item}/>
            </div>
        );
    }
}

CoverPage.propTypes = {
    covers: PropTypes.array.isRequired,
    cover: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    words: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired
};

function getCoverById(covers, id) {
    const cover = covers.filter(cover => cover.id == id);
    if (cover.length) return cover[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const coverId = ownProps.params.id;

    let cover = {id: '', name: ''};

    if (coverId && state.covers.length > 0) {
        cover = getCoverById(state.covers, coverId);
    }

    return {
        covers: state.covers,
        cover: cover,
        words: state.words,
        currentUser: state.currentUser
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(coverActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoverPage);
