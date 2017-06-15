import React, {PropTypes} from 'react';

const CarrierListRow = ({carrier, onDelete, onEdit}) => {
    return (
        <tr>
            <td className="bg-info col-lg-10 col-md-9 col-sm-8 col-xs-8">
                {carrier.name}
            </td>
            <td className="bg-info col-lg-2 col-md-3 col-sm-4 col-xs-4 row-manage-item">
                <button className="manage-item-options edit" value={carrier} id={carrier.id} onClick={onEdit}><i className="fa fa-pencil" aria-hidden="true" id={carrier.id} value={carrier}></i></button>
                <button id={carrier.id} value={carrier.id} onClick={onDelete} className="manage-item-options delete"><i value={carrier.id} id={carrier.id} className="fa fa-trash" aria-hidden="true"></i></button>
            </td>
        </tr>
    );
};

CarrierListRow.propTypes = {
    carrier: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default CarrierListRow;
