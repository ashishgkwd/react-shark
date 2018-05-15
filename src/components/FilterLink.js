import React from 'react';
import PropTypes from 'prop-types';

const FilterLink = ({ linkLabel, onLinkClick }) => {
    const onClickHandler = (event) => {
        event.preventDefault();
        onLinkClick(linkLabel);
    };

    return (
        <a href="all" onClick={onClickHandler} >{linkLabel}</a>
    );
};

FilterLink.propTypes = {
    linkLabel: PropTypes.string.isRequired,
    onLinkClick: PropTypes.func.isRequired,
};

export default FilterLink;
