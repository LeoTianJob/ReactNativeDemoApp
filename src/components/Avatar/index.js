import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const avatar = ({ imgUri , size }) => {
    const source = imgUri ? { uri: imgUri} : require('../../assets/images/user.png');

    return (
        <Image 
            source={source} 
            style={[styles.container, {width: size, height: size, borderRadius: size / 2}]}
        />
    );
}

avatar.propTypes = {
    imgUri: PropTypes.any,
    size: PropTypes.number
}

avatar.defaultProps = {
    imgUri: null,
    size: 64
}

export default avatar;