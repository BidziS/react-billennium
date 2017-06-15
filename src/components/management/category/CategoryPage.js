import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoriesActions from '../../../actions/categoryAction';
import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm';
import {Link, browserHistory} from 'react-router';

class CategoryPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleCategoryDelete = this.handleCategoryDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleUpdateField = this.handleUpdateField.bind(this);
        this.handleSaveCategory = this.handleSaveCategory.bind(this);
        this.handleEditCategory = this.handleEditCategory.bind(this);
        this.handleConfirmSave = this.handleConfirmSave.bind(this);
        this.handleConfirmDelete = this.handleConfirmDelete.bind(this);

        this.state = {
            isOpen: false, hide: false,
            isConfirmModalOpen: false, hideConfirmDialog: false,
            category: Object.assign({}, this.props.category),
            categoryToDeleteId: 0
        };
    }
    componentDidMount() {
        if(Object.keys(this.props.currentUser).length === 0){
            browserHistory.push('/');
        }
    }
    handleCategoryDelete(event) {
        event.preventDefault();
        this.props.actions.deleteCategory(this.state.categoryToDeleteId);
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
        let category = this.state.category;
        category[field] = event.target.value;
        return this.setState({category: category});
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
        let categoryId = parseInt(event.target.id);
        this.setState({
            categoryToDeleteId: categoryId
        });
        this.setState({
            hideConfirmDialog: !this.state.hideConfirmDialog
        });
        this.setState({
            isConfirmModalOpen: !this.state.isConfirmModalOpen
        });

    }
    handleSaveCategory(event) {
        event.preventDefault();
        this.props.actions.saveCategory(this.state.category);
        let category = {id: '', name: ''};
        this.setState({
            category: category
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

    handleEditCategory(event) {
        const categoryId = parseInt(event.target.id);
        const category = this.props.categories.filter(category => category.id === categoryId);
        this.setState({
            category: Object.assign({},category[0])
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
                <CategoryList categories={this.props.categories} onDelete={this.handleCategoryDelete}
                              onModalOpen={this.handleClose} onEdit={this.handleEditCategory}
                              words={this.props.words} isConfirmModalHide={this.state.hideConfirmDialog}
                              isConfirmModalOpen={this.state.isConfirmModalOpen} onConfirmModalToggle={this.handleConfirmDelete}/>
                <CategoryForm hide={this.state.hide} isOpen={this.state.isOpen}
                              category={this.state.category} isConfirmModalOpen={this.state.isConfirmModalOpen}
                              isConfirmModalHide={this.state.hideConfirmDialog} onClose={this.handleClose}
                              onUpdate={this.handleUpdateField} onSave={this.handleSaveCategory}
                              onConfirmSave={this.handleConfirmSave} words={this.props.words.add_edit_category} confirmWords={this.props.words.confirm_add_edit_item}/>
            </div>
        );
    }
}

CategoryPage.propTypes = {
    categories: PropTypes.array.isRequired,
    category: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    words: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired
};

function getCategoryById(categories, id) {
    const category = categories.filter(category => category.id == id);
    if (category.length) return category[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const categoryId = ownProps.params.id;

    let category = {id: '', name: ''};

    if (categoryId && state.categories.length > 0) {
        category = getCategoryById(state.categories, categoryId);
    }

    return {
        categories: state.categories,
        category: category,
        words: state.words,
        currentUser: state.currentUser
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoriesActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
