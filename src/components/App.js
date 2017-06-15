import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import {connect} from 'react-redux';
import ChangeLanguage from './common/ChangeLanguage';
import Modal from './common/Modal';
import Loader from './common/Loader';
import OnError from './common/OnError';
import Logout from './common/Logout';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { hide: false, isOpen: false, isLogout: false};
        this.closeLogoutModal = this.closeLogoutModal.bind(this);
    }
    closeLogoutModal(event) {
        event.preventDefault();
        this.setState({
            isLogout: !this.state.isLogout
        });
    }
    render() {
        const toggleModal = () => {
            if(this.state.isOpen){
                this.setState({
                    hide: !this.state.hide
                });
                setTimeout(() => {
                    this.setState({
                        isOpen: !this.state.isOpen
                    });
                }, 400);
                return;
            }
            this.setState({
                hide: !this.state.hide
            });
            this.setState({
                isOpen: !this.state.isOpen
            });
        };

        return (
            <div>

                <Header hide={this.state.hide}
                        isOpen={this.state.isOpen}
                        openLoginForm={toggleModal}
                        isLogout={this.state.isLogout}
                        handleLogout={this.closeLogoutModal}/>
                <div className="container">
                    <ChangeLanguage/>
                    {this.props.children}
                </div>
                <Modal show={this.state.isOpen}
                       hide={this.state.hide}
                       onClose={toggleModal}>
                    Here's some content for the modal
                </Modal>
                <OnError />
                <Logout isLogout={this.state.isLogout} closeLogoutModal={this.closeLogoutModal} />
                <Loader loading={this.props.loading} />
                <Footer/>
            </div>
        );

    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};


function mapStateToProps(state, ownProps) {
    return{
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);

