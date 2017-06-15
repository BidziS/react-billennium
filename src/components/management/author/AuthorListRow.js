import React, {PropTypes} from 'react';

const AuthorListRow = ({author, onDelete, onEdit, countries}) => {
    return (
        <tr>
            <td className="bg-info col-lg-3 col-md-3 col-sm-3 col-xs-3">
                {author.name}
            </td>
            <td className="bg-info col-lg-3 col-md-3 col-sm-3 col-xs-3">
                {author.surname}
            </td>
            <td className="bg-info col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <img className="flag-icon" src={countries.filter(country => country.id === author.countryId)[0].flagUrl}/>
            </td>
            <td className="bg-info col-lg-3 col-md-3 col-sm-3 col-xs-3 row-manage-item">
                <button className="manage-item-options edit" value={author} id={author.id} onClick={onEdit}><i className="fa fa-pencil" aria-hidden="true" id={author.id} value={author}></i></button>
                <button id={author.id} value={author.id} onClick={onDelete} className="manage-item-options delete"><i value={author.id} id={author.id} className="fa fa-trash" aria-hidden="true"></i></button>
            </td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    countries: PropTypes.array.isRequired
};

export default AuthorListRow;
