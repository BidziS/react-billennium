import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../../actions/bookAction';
import EmptyList from './EmptyList';
import ListOfRecentWatchedBooks from './ListOfRecentWatchedBooks';

class LastWatchedProducts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isOpen: false};

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleOpenDropDown = this.handleOpenDropDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleOpenDropDown(event) {
        event.preventDefault();
        this.setState({
            isOpen: true
        });
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                isOpen: false
            });
        }
    }

    render() {
        return (
            <div className={this.state.isOpen ? "dropdown nav-item-container clicked":"dropdown nav-item-container"} ref={this.setWrapperRef}>
                <a className="navbar-item" onClick={this.handleOpenDropDown}>{this.props.words.nav.nav_recent}<span className="caret"></span></a>
                {this.props.recentWatchedBooks.length !== 0 ? <ListOfRecentWatchedBooks recentWatchedBooks={this.props.recentWatchedBooks} isOpen={this.state.isOpen}/> : <EmptyList isOpen={this.state.isOpen}/>}
            </div>
        );
    }
}

LastWatchedProducts.propTypes = {
    recentWatchedBooks: PropTypes.array.isRequired,
    bookActions: PropTypes.object.isRequired,
    words: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
    return {
        words: state.words,
        currentUser: state.currentUser,
        recentWatchedBooks: state.recentWatchedBooks
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        bookActions: bindActionCreators(bookActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchtoProps)(LastWatchedProducts);
