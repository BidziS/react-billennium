import React, {PropTypes} from 'react';

const EmptyList = ({isOpen}) => {
    return(
        <div className={isOpen ? "dropdown-content hover flex-container" : "dropdown-content flex-container"}>
            Brak ostatnio oglądanych
        </div>
    );
};
EmptyList.propTypes = {
    isOpen: PropTypes.bool.isRequired
};
export default EmptyList;