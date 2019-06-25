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
                <Text style={[itemStyle, {fontWeight: '600'}]}>{name}</Text>
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
    name: '',
    address: '',
    onClick: () => {}
}

export default friendItem;
