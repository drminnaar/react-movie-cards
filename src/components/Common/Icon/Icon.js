import React from 'react';
import PropTypes from 'prop-types';

export const Icon = ({ iconImg, width, height }) => {
    return (
        <img src={iconImg} width={width} height={height} />
    );
};

Icon.defaultProps = {
    width: '50px',
    height: '50px',
};

Icon.propTypes = {
    iconImg: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
};
