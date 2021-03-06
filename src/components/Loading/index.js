import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';
import { honoluluBlue } from '../../styles/colors';

import styles from './styles';

const loading = ({ size, color }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} color={color} />
        </View>
    );
}

loading.propTypes = {
    size: PropTypes.oneOf(["small", "large"]),
    color: PropTypes.string
}

loading.defaultProps = {
    size: 'large',
    color: honoluluBlue
}

export default loading;
