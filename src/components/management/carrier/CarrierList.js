import React, {PropTypes} from 'react';
import CarrierListRow from './CarrierListRow';
import ConfirmModal from '../../common/ConfirmModal';

class CarrierList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {itemsOnPage: 1, currentPage: 1, searchString:''};

        this.handleClick = this.handleClick.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSearchStringChange = this.handleSearchStringChange.bind(this);
    }

    handleClick(event) {
        if (event.target.value === "prev" && this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        } else if (event.target.value === "next" && this.state.currentPage < Math.ceil(this.props.carriers.length / this.state.itemsOnPage)) {
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
    handleSearchStringChange(event){
        let search = event.target.value;
        return this.setState({searchString: search});
    }

    render() {
        const {itemsOnPage, currentPage, searchString} = this.state;
        let filteredItems = this.props.carriers.filter((item) => {
            return item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
        });

        const indexOfLastItem = currentPage * itemsOnPage;
        const indexOfFirstItem = indexOfLastItem - itemsOnPage;
        const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
        let numberOfPages = Math.ceil(filteredItems.length / itemsOnPage);

        const pageNumbers = [];
        for (let i = 1; i <= numberOfPages; i++) {
            pageNumbers.push(i);
        }
        const numbersOfElements = [];
        for (let i = 1; i <= filteredItems.length; i++) {
            numbersOfElements.push(i);
        }

        return (
            <div id="container">
                <div className="homepage-container">
                    {this.props.words.manage_carriers.header}
                    <button className="btn btn-success btn-header" onClick={this.props.onModalOpen}>{this.props.words.manage_carriers.add_new_carrier_button}</button>
                    <hr />
                </div>
                <div className="container">
                    <div className="table-container-carriers">
                        <div className="search-container">
                            <input className="search-input" onChange={this.handleSearchStringChange} value={searchString}/>
                        </div>
                        <table className="table table-bordered table-responsive table-hover table-fixed">
                            <thead>
                            <tr className="bg-primary">
                                <th>{this.props.words.manage_carriers.table_fields.name}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentItems.map(carrier =>
                                <CarrierListRow key={carrier.id} carrier={carrier} onDelete={this.props.onConfirmModalToggle} onEdit={this.props.onEdit}/>
                            )}
                            </tbody>
                        </table>
                        <div className="change-table-number">
                            <button className="btn btn-sm change-table-number-button" value="prev" onClick={this.handleClick}>&lt;</button>
                            <input className="table-number" onChange={this.handleClick} type="text"
                                   value={currentPage}/>
                            {this.props.words.manage_carriers.table_site_quantity+numberOfPages}
                            <button className="btn btn-sm change-table-number-button" value="next" onClick={this.handleClick}>&gt;</button>
                            <div>
                                {this.props.words.manage_carriers.items_on_table}
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


CarrierList.propTypes = {
    carriers: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onModalOpen: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    words: PropTypes.object.isRequired,
    isConfirmModalOpen: PropTypes.bool.isRequired,
    isConfirmModalHide: PropTypes.bool.isRequired,
    onConfirmModalToggle: PropTypes.func.isRequired
};

export default CarrierList;
