import React, {PropTypes} from 'react';

const CoverListRow = ({cover, onDelete, onEdit}) => {
    return (
        <tr>
            <td className="bg-info col-lg-10 col-md-9 col-sm-8 col-xs-8">
                {cover.name}
            </td>
            <td className="bg-info col-lg-2 col-md-3 col-sm-4 col-xs-4 row-manage-item">
                <button className="manage-item-options edit" value={cover} id={cover.id} onClick={onEdit}><i className="fa fa-pencil" aria-hidden="true" id={cover.id} value={cover}></i></button>
                <button id={cover.id} value={cover.id} onClick={onDelete} className="manage-item-options delete"><i value={cover.id} id={cover.id} className="fa fa-trash" aria-hidden="true"></i></button>
            </td>
        </tr>
    );
};

CoverListRow.propTypes = {
    cover: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default CoverListRow;
