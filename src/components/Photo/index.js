import React from 'react';
import { Image, Dimensions, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const photo = ({ imgUri, onClick, disabled }) => {
    const source = imgUri ? { uri: imgUri } : require('../../assets/images/placeholder.png');
    
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onClick}
            disabled={disabled}
        >
            <Image source={source} style={styles.imgStyle} resizeMode="cover"/>
        </TouchableOpacity>
    );
}

photo.propTypes = {
    imgUri: PropTypes.any,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

photo.defaultProps = {
    imgUri: null,
    disabled: false,
    onClick: () => { }
}

export default photo;