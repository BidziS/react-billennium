import React, {PropTypes} from 'react';
import CategoryListRowT from './CategoryListRowT';
import ConfirmModal from '../../common/ConfirmModal';

class CategoryList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {itemsOnPage: 1, currentPage: 1};

        this.handleClick = this.handleClick.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleClick(event) {
        if (event.target.value === "prev" && this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        } else if (event.target.value === "next" && this.state.currentPage < Math.ceil(this.props.categories.length / this.state.itemsOnPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        } else if (event.target.value === "prev" || event.target.value === "next") {
            //nothing
        }
        else {
            this.setState({
                currentPage: Number(event.target.value)
            });
        }
    }

    handleSelectChange(event) {
        this.setState({
            itemsOnPage: Number(event.target.value)
        });
        if (this.state.currentPage > this.state.itemsOnPage) {
            this.setState({
                currentPage: this.state.itemsOnPage
            });
        }
    }

    render() {
        const {itemsOnPage, currentPage} = this.state;

        // Logic for displaying current todos
        const indexOfLastItem = currentPage * itemsOnPage;
        const indexOfFirstItem = indexOfLastItem - itemsOnPage;
        const currentItems = this.props.categories.slice(indexOfFirstItem, indexOfLastItem);
        let numberOfPages = Math.ceil(this.props.categories.length / itemsOnPage);

        const pageNumbers = [];
        for (let i = 1; i <= numberOfPages; i++) {
            pageNumbers.push(i);
        }
        const numbersOfElements = [];
        for (let i = 1; i <= this.props.categories.length; i++) {
            numbersOfElements.push(i);
        }

        return (
            <div id="container">
                <div className="homepage-container">
                    {this.props.words.manage_categories.header}
                    <button className="btn btn-success btn-header" onClick={this.props.onModalOpen}>{this.props.words.manage_categories.add_new_category_button}</button>
                    <hr />
                </div>
                <div className="container">
                    <div className="table-container-categories">
                        <table className="table table-bordered table-responsive table-hover table-fixed">
                            <thead>
                            <tr className="bg-primary">
                                <th>{this.props.words.manage_categories.table_fields.name}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentItems.map(category =>
                                <CategoryListRowT key={category.id} category={category} onDelete={this.props.onConfirmModalToggle} onEdit={this.props.onEdit}/>
                            )}

                            </tbody>
                        </table>
                        <div className="change-table-number">
                            <button className="btn btn-sm change-table-number-button" value="prev" onClick={this.handleClick}>&lt;</button>
                            <input className="table-number" onChange={this.handleClick} type="text"
                                   value={currentPage}/>
                            {this.props.words.manage_categories.table_site_quantity+numberOfPages}
                            <button className="btn btn-sm change-table-number-button" value="next" onClick={this.handleClick}>&gt;</button>
                            <div>
                                {this.props.words.manage_categories.items_on_table}
                            </div>
                            <select onChange={this.handleSelectChange}>
                                {numbersOfElements.map(element => <option key={element}
                                                                          value={element}>{element}</option>)}
                            </select>
                        </div>
                    </div>

                </div>
                <ConfirmModal isOpen={this.props.isConfirmModalOpen} hide={this.props.isConfirmModalHide} onClose={this.props.onConfirmModalToggle}
                              onAction={this.props.onDelete} words={this.props.words.confirm_delete_item}/>
            </div>
        );
    }
}
CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onModalOpen: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    words: PropTypes.object.isRequired,
    isConfirmModalOpen: PropTypes.bool.isRequired,
    isConfirmModalHide: PropTypes.bool.isRequired,
    onConfirmModalToggle: PropTypes.func.isRequired
};

export default CategoryList;
