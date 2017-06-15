import React, {PropTypes} from 'react';

const CountryListRow = ({country}) => {
    return (
        <tr>
            <td className="bg-info col-lg-6 col-md-6 col-sm-6 col-xs-6">
                {country.name}
            </td>
            <td className="bg-info col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <img className="flag-icon" src={country.flagUrl}/>
            </td>
        </tr>
    );
};

CountryListRow.propTypes = {
    country: PropTypes.object.isRequired
};

export default CountryListRow;
