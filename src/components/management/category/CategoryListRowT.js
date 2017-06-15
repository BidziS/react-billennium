import React, {PropTypes} from 'react';

const CategoryListRowT = ({category, onDelete, onEdit}) => {
    return (
        <tr>
            <td className="bg-info col-lg-10 col-md-9 col-sm-8 col-xs-8">
                {category.name}
            </td>
            <td className="bg-info col-lg-2 col-md-3 col-sm-4 col-xs-4 row-manage-item">
                <button className="manage-item-options edit" value={category} id={category.id} onClick={onEdit}><i className="fa fa-pencil" aria-hidden="true" id={category.id} value={category}></i></button>
                <button id={category.id} value={category.id} onClick={onDelete} className="manage-item-options delete"><i value={category.id} id={category.id} className="fa fa-trash" aria-hidden="true"></i></button>
            </td>
        </tr>
    );
};

CategoryListRowT.propTypes = {
    category: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default CategoryListRowT;
