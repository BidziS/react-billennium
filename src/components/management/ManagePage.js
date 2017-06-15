import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';

import './management-style.scss';

class ManagePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        if(Object.keys(this.props.currentUser).length === 0){
            browserHistory.push('/');
        }
    }
    render() {
        return (
            <div>
                <h4>{this.props.words.manage_page.header}</h4>
                <hr />
                <div className="col-md-4 col-lg-4 col-sm-10 col-xs-10">
                    <Link to="/authors" style={{textDecoration: 'none'}}>
                    <div className="item-managepage">
                        <div className="row item-managepage-text">
                            {this.props.words.manage_page.author}
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-10 col-xs-10 manage-item-container">
                    <Link to="/categories" style={{textDecoration: 'none'}}>
                    <div className="item-managepage">
                        <div className="row item-managepage-text">
                            {this.props.words.manage_page.category}
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-10 col-xs-10">
                    <Link to="/countries" style={{textDecoration: 'none'}}>
                    <div className="item-managepage">
                        <div className="row item-managepage-text">
                            {this.props.words.manage_page.country}
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-10 col-xs-10">
                    <Link to="/books" style={{textDecoration: 'none'}}>
                    <div className="item-managepage">
                        <div className="row item-managepage-text">
                            {this.props.words.manage_page.book}
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-10 col-xs-10">
                    <Link to="/carriers" style={{textDecoration: 'none'}}>
                    <div className="item-managepage">
                        <div className="row item-managepage-text">
                            {this.props.words.manage_page.carrier}
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-10 col-xs-10">
                    <Link to="/covers" style={{textDecoration: 'none'}}>
                        <div className="item-managepage">
                            <div className="row item-managepage-text">
                                {this.props.words.manage_page.cover}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        );
    }
}

ManagePage.propTypes = {
    words: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        words: state.words,
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps)(ManagePage);
