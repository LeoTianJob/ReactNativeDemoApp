import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { americanGreen } from '../../styles/colors';

const loading = ({size, color}) => {
    return <ActivityIndicator size={size} color={color}/>
}

loading.propTypes = {
    size: PropTypes.oneOf(["small", "large"]),
    color: PropTypes.string
}

loading.defaultProps = {
    size: 'large',
    color: americanGreen
}

export default loading;
