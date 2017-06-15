import React, {PropTypes} from 'react';

const Loader = ({loading}) => {
    if (!loading){
        return null;
    }
    return (
        <div className="backdrop-style">
            <div className={loading?'loader':''}></div>

        </div>
    );
};

Loader.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Loader;
