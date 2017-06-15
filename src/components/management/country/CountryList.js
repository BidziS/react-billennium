import React, {PropTypes} from 'react';
import CountryListRow from './CountryListRow';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';

import './country-style.scss';

class CountryList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {itemsOnPage: 1, currentPage: 1, searchString:''};

        this.handleClick = this.handleClick.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSearchStringChange = this.handleSearchStringChange.bind(this);
    }
    componentDidMount() {
        if(Object.keys(this.props.currentUser).length === 0){
            browserHistory.push('/');
        }
    }
    handleClick(event) {
        if (event.target.value === "prev" && this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        } else if (event.target.value === "next" && this.state.currentPage < Math.ceil(this.props.countries.length / this.state.itemsOnPage)) {
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
        let filteredItems = this.props.countries.filter((item) => {
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
                    {this.props.words.manage_countries.header}
                    <hr />
                </div>
                <div className="container">
                    <div className="table-container-countries">
                        <div className="search-container">
                            <input className="search-input" onChange={this.handleSearchStringChange} value={searchString}/>
                        </div>
                        <table className="table table-bordered table-responsive table-hover table-fixed country-list">
                            <thead>
                            <tr className="bg-primary">
                                <th>{this.props.words.manage_countries.table_fields.name}</th>
                                <th>{this.props.words.manage_countries.table_fields.flag}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentItems.map(country =>
                                <CountryListRow key={country.id} country={country}/>
                            )}
                            </tbody>
                        </table>
                        <div className="change-table-number">
                            <button className="btn btn-sm change-table-number-button" value="prev" onClick={this.handleClick}>&lt;</button>
                            <input className="table-number" onChange={this.handleClick} type="text"
                                   value={currentPage}/>
                            {this.props.words.manage_countries.table_site_quantity+numberOfPages}
                            <button className="btn btn-sm change-table-number-button" value="next" onClick={this.handleClick}>&gt;</button>
                            <div>
                                {this.props.words.manage_countries.items_on_table}
                            </div>
                            <select onChange={this.handleSelectChange}>
                                {numbersOfElements.map(element => <option key={element}
                                                                          value={element}>{element}</option>)}
                            </select>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}


CountryList.propTypes = {
    countries: PropTypes.array.isRequired,
    words: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return{
        countries: state.countries,
        words: state.words,
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps)(CountryList);
