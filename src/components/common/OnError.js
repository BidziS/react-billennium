import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as onErrorActions from '../../actions/onErrorAction';

class OnError extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state={errorInformation: undefined};

        this.handleClose = this.handleClose.bind(this);
    }
    handleClose(event){
        event.preventDefault();
        this.props.actions.exitError();

    }

    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.errorInformation.length) {
            return null;
        }
        return (
            <div className="backdrop-style">
                <div className={"modal-content error"}>
                    <div className="error-message-title">
                        Error!
                    </div>
                    <hr />
                    <form onSubmit={this.handleClose}>

                        <label>Error information: {this.props.errorInformation}</label>
                        <hr />
                        <input type="submit" className="form-button login"/>
                    </form>
                </div>
            </div>
        );
    }
}

OnError.propTypes = {
    errorInformation: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return{
        errorInformation: state.errorInformation
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        actions: bindActionCreators(onErrorActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchtoProps)(OnError);