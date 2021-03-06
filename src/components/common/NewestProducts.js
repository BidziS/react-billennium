import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../../actions/bookAction';

class NewestProducts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isOpen: false};

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleOpenDropDown = this.handleOpenDropDown.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        this.props.bookActions.loadAllBooksSortedByNewest();
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleOpenDropDown(event){
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
                <a className="navbar-item" onClick={this.handleOpenDropDown}>{this.props.words.nav.nav_newest}<span className="caret"></span></a>
                <div className={this.state.isOpen ? "dropdown-content hover flex-container":"dropdown-content flex-container"}>
                    {this.props.newestBooks.map(book =>
                        <div key={book.id} className="list-item-container col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            {/*<Link to="/about">*/}
                            <div className="list-item">
                                <div className="row">
                                    <div className="col-md-2 col-lg-2 col-xs-2">
                                        <img src={book.cover}
                                             alt="boohoo" className="img-item-list"/>
                                    </div>
                                    <div className="col-md-10 col-lg-10 col-xs-10 item-description">
                                        <div className="item-list-title">{book.title}</div>
                                    </div>
                                </div>
                            </div>
                            {/*</Link>*/}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

NewestProducts.propTypes = {
    newestBooks: PropTypes.array.isRequired,
    bookActions: PropTypes.object.isRequired,
    words: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
    return{
        words: state.words,
        currentUser: state.currentUser,
        newestBooks: state.newestBooks
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        bookActions:bindActionCreators(bookActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchtoProps)(NewestProducts);
