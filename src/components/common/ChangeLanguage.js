import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as laungeActions from '../../actions/languageActions';
const polishFlag = require('../../images/polish_flag.png');
const englishFlag = require('../../images/english_flag.png');

class ChangeLanguage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const setPolishLanguage = () => {
            return 'pl';
        };
        const setEnglishLanguage = () => {
            return 'en';
        };
        const changeToPolish = () => {
            this.props.actions.loadWords(setPolishLanguage());
        };
        const changeToEnglish = () => {
            this.props.actions.loadWords(setEnglishLanguage());
        };
        return (
            <div className="images-container">
                <img className="flag-icon" src={polishFlag} onClick={changeToPolish}/>
                <img className="flag-icon" src={englishFlag} onClick={changeToEnglish}/>
            </div>
        );
    }
}

ChangeLanguage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(laungeActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguage);
