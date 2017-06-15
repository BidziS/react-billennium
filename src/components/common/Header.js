import React, {PropTypes} from 'react';
import {Link, IndexLink,browserHistory} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as laungeActions from '../../actions/languageActions';
import * as loginActions from '../../actions/userAction';
import * as bookActions from '../../actions/bookAction';
import NewestProducts from './NewestProducts';
import LastWatchedProducts from './LastWatchedProducts';
import { push } from 'react-router-redux';

import './common-style.scss';

class Header extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = { isPolish: 'en', words: this.props.words[0], toggleRecentProducts: false };

        this.gotoHomePage = this.gotoHomePage.bind(this);
        this.gotoManagePage = this.gotoManagePage.bind(this);
        this.gotoSettings = this.gotoSettings.bind(this);
    }

    gotoHomePage(event){
        event.preventDefault();
        this.context.router.push('/');
    }
    gotoManagePage(event){
        event.preventDefault();
        this.context.router.push('/manage');
    }
    gotoSettings(event){
        event.preventDefault();
        browserHistory.push('/');
    }


    render(){
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#"><i className="fa fa-book" aria-hidden="true"></i>{this.props.words !== null && this.props.words.name}</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown eventKey={1} title="Menu" id="basic-nav-dropdown">
                                <MenuItem eventKey={1.1} onClick={this.gotoHomePage}>{this.props.words.nav.nav_home}</MenuItem>
                                <MenuItem eventKey={1.2} onClick={this.gotoManagePage}>{this.props.words.nav.nav_manage_elements}</MenuItem>
                                <MenuItem eventKey={1.3} onClick={this.gotoSettings}>{this.props.words.nav.nav_config}</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav><NewestProducts/></Nav>
                        <Nav><LastWatchedProducts /></Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1}>{Object.keys(this.props.currentUser).length === 0 ? this.props.words.nav.nav_quest : this.props.words.nav.nav_user + this.props.currentUser.login}</NavItem>
                            <NavItem eventKey={2}
                                     onClick={Object.keys(this.props.currentUser).length === 0 ? this.props.openLoginForm :this.props.handleLogout}>{Object.keys(this.props.currentUser).length === 0 ? this.props.words.nav.nav_log_in : this.props.words.nav.nav_log_out}</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        );
    }
}

Header.propTypes = {
    words: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    loginActions: PropTypes.object.isRequired,
    bookActions: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired,
    hide: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    openLoginForm: PropTypes.func.isRequired,
    isLogout: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired


};
Header.contextTypes = {
    router: PropTypes.object
};
function mapStateToProps(state, ownProps) {
    return{
        words: state.words,
        currentUser: state.currentUser,
        books: state.books
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        actions: bindActionCreators(laungeActions, dispatch),
        loginActions: bindActionCreators(loginActions, dispatch),
        bookActions:bindActionCreators(bookActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
