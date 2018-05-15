import React from 'react';
import PropTypes from 'prop-types';

import FilterLink from './FilterLink';

const VisibilityFilter = ({ filters, onLinkClick }) => {
    const linkFilters = filters.map(filter => (<FilterLink
                                                    href={filter}
                                                    linkLabel={filter}
                                                    onLinkClick={onLinkClick}
    />));

    return (
        <div className="filter-link">
            {linkFilters}
        </div>
    );
};

VisibilityFilter.propTypes = {
    filters: PropTypes.array.isRequired,
    onLinkClick: PropTypes.func.isRequired,
};

export default VisibilityFilter;
