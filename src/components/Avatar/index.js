import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const avatar = ({ imgUri , size, containerStyle }) => {
    const source = imgUri ? { uri: imgUri} : require('../../assets/images/user.png');

    return (
        <Image 
            source={source} 
            style={[styles.container, {width: size, height: size, borderRadius: size / 2}, containerStyle]}
        />
    );
}

avatar.propTypes = {
    imgUri: PropTypes.any,
    size: PropTypes.number,
    containerStyle: PropTypes.object
}

avatar.defaultProps = {
    imgUri: null,
    size: 64,
    containerStyle: {}
}

export default avatar;