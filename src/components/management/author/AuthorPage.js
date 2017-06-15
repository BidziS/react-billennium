import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../../actions/authorAction';
import AuthorList from './AuthorList';
import AuthorForm from './AuthorForm';
import {Link, browserHistory} from 'react-router';

import './author-style.scss';

class AuthorPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleAuthorDelete = this.handleAuthorDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleUpdateField = this.handleUpdateField.bind(this);
        this.handleSaveAuthor = this.handleSaveAuthor.bind(this);
        this.handleEditAuthor = this.handleEditAuthor.bind(this);
        this.handleConfirmSave = this.handleConfirmSave.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleConfirmDelete = this.handleConfirmDelete.bind(this);

        this.state = {
            isOpen: false, hide: false,
            isConfirmModalOpen: false, hideConfirmDialog: false,
            author: Object.assign({}, this.props.author),
            authorToDeleteId: 0
        };
    }
    componentDidMount() {
        if(Object.keys(this.props.currentUser).length === 0){
            browserHistory.push('/');
        }
    }
    handleAuthorDelete(event) {
        event.preventDefault();
        this.props.actions.deleteAuthor(this.state.authorToDeleteId);
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
        let author = this.state.author;
        author[field] = event.target.value;
        return this.setState({author: author});
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
        let authorId = parseInt(event.target.id);
        this.setState({
            authorToDeleteId: authorId
        });
        this.setState({
            hideConfirmDialog: !this.state.hideConfirmDialog
        });
        this.setState({
            isConfirmModalOpen: !this.state.isConfirmModalOpen
        });

    }

    handleSaveAuthor(event) {
        event.preventDefault();
        this.props.actions.saveAuthor(this.state.author);
        let author = {id: '', name: '', countryId: 1};
        this.setState({
            author: author
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

    handleEditAuthor(event) {
        const authorId = parseInt(event.target.id);
        const author = this.props.authors.filter(author => author.id === authorId);
        this.setState({
            author: Object.assign({},author[0])
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
            let author = {id: '', name: '', countryId: 1};
            this.setState({
                author: author
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
        let countryId = parseInt(event.target.value);
        let author = this.state.author;
        author.countryId = countryId;
        this.setState({
            author: author
        });
    }

    render() {
        return (
            <div>
                <AuthorList authors={this.props.authors} onDelete={this.handleAuthorDelete}
                            onModalOpen={this.handleClose} onEdit={this.handleEditAuthor}
                            countries={this.props.countries} words={this.props.words}
                            isConfirmModalOpen={this.state.isConfirmModalOpen}
                            isConfirmModalHide={this.state.hideConfirmDialog}
                            onConfirmModalToggle={this.handleConfirmDelete}/>
                <AuthorForm hide={this.state.hide} isOpen={this.state.isOpen}
                            author={this.state.author} isConfirmModalOpen={this.state.isConfirmModalOpen}
                            isConfirmModalHide={this.state.hideConfirmDialog} onClose={this.handleClose}
                            onUpdate={this.handleUpdateField} onSave={this.handleSaveAuthor}
                            onConfirmSave={this.handleConfirmSave} countries={this.props.countries}
                            onSelect={this.handleSelectChange} words={this.props.words.add_edit_author} confirmWords={this.props.words.confirm_add_edit_item}/>
            </div>
        );
    }
}

AuthorPage.propTypes = {
    authors: PropTypes.array.isRequired,
    countries: PropTypes.array.isRequired,
    author: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    words: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired
};

function getAuthorById(authors, id) {
    const author = authors.filter(author => author.id == id);
    if (author.length) return author[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const authorId = ownProps.params.id;

    let author = {id: '', name: '', surname:'',countryId: 1};

    if (authorId && state.authors.length > 0) {
        author = getAuthorById(state.authors, authorId);
    }

    return {
        authors: state.authors,
        countries: state.countries,
        author: author,
        words: state.words,
        currentUser: state.currentUser
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);
