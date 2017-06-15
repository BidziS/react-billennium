import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userAction';

class Modal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {value: {login: '', password: ''}, flag: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        let value = this.state.value;
        value[field] = event.target.value;
        return this.setState({value: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.actions.loginUser(this.state.value).then(() => {
            if(Object.keys(this.props.currentUser).length !== 0){
                this.setState({
                    flag: false
                });
                this.props.onClose();
            }else{
                this.setState({
                    flag: true
                });
            }
        });
    }
    handleClose(event){
        event.preventDefault();
        this.setState({
            flag: false
        });
        this.props.onClose();

    }

    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }
        return (
            <div className='backdrop-style'>
                <div className={this.props.hide ? 'modal-content' : 'modal-content-back'}>
                    <form onSubmit={this.handleSubmit}>
                        <input className="form-input" name="login" placeholder={this.props.words.login_form.login} type="text" value={this.state.value.login} onChange={this.handleChange}/>
                        <input className="form-input"  name="password" placeholder={this.props.words.login_form.password} type="password" value={this.state.value.password}
                               onChange={this.handleChange}/>
                        {this.state.flag && <div>Nieprawidłowy login lub hasło!</div>}
                        <input type="submit" value={this.props.words.login_form.submit} className="form-button login"/>
                    </form>
                    <div className="footer">
                        <button className="form-button abort" onClick={this.handleClose}>
                            {this.props.words.login_form.abort}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool,
    hide: React.PropTypes.bool,
    children: React.PropTypes.node,
    users: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired,
    words: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return{
        users: state.users,
        currentUser: state.currentUser,
        words: state.words
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchtoProps)(Modal);