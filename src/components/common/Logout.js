import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/userAction';

class Logout extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout(event){
        event.preventDefault();
        this.props.actions.logoutUser().then(() => {
            this.props.closeLogoutModal(event);
            window.location.reload();
        });

    }

    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.isLogout) {
            return null;
        }
        return (
            <div className="backdrop-style">
                <div className={"modal-content logout"}>
                    <div className="error-message-title">

                    </div>
                    <hr />
                    <form onSubmit={this.handleLogout}>
                        <label>Czy na pewno chcesz się wylogować? </label>
                        <hr />
                        <input type="submit" className="form-button login" value="Tak"/>
                    </form>
                    <button className="form-button abort">Anuluj</button>
                </div>
            </div>
        );
    }
}

Logout.propTypes = {
    words: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    isLogout: PropTypes.bool.isRequired,
    closeLogoutModal: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return{
        words: state.words,
        currentUser: state.currentUser
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchtoProps)(Logout);