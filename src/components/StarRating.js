import React from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
    starsInner: {
        width: `${width}px`
    },
    starsEmptyInner: {
        position: 'absolute',
        width: `${width}px`
    },
    starsOuter: {
        overflow: 'hidden'
    },
    star: {
        padding: '1px'
    }
};

const cropWidth = (rating) => {
    return Math.floor(rating * width / 5);
};

const StarRating = (props) => {

    const containerStyle = { width: `${cropWidth(props.rating)}px` };
    
    const icons = [];
    
    for (let j = 0; j < 5; j++) {
        icons.push(<i className="fa fa-star-o fa-lg" style={styles.star}></i>);
    }

    return (
        <div>
            <div style={styles.starsOuter}>
                <div style={containerStyle}>
                    <div style={styles.starsEmptyInner}>
                        {icons}
                    </div>
                    <div style={styles.starsInner}>
                        {icons}
                    </div>
                </div>
            </div>
        </div>
    );
};

StarRating.defaultProps = {
    rating: 0
};

StarRating.propTypes = {
    rating: PropTypes.number
};

export default StarRating;
