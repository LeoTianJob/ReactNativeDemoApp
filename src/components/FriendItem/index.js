import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from '../../components/Avatar';

import styles from './styles'

const friendItem = ({ name, address, onClick }) => {

    const { container, userInfoStyle, itemStyle } = styles;

    return (
        <TouchableOpacity style={container} onPress={onClick} >
            <Avatar /> 
            <View style={userInfoStyle}>
                <Text style={itemStyle}>{name}</Text>
                <Text style={itemStyle}>{address}</Text>
            </View>
        </TouchableOpacity>
    );
}

friendItem.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    onClick: PropTypes.func
}

friendItem.defaultProps = {
    name: 'USER NAME',
    address: 'USER ADDRESS',
    onClick: () => {}
}

export default friendItem;
