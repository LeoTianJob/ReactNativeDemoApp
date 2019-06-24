import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Avatar from '../../components/Avatar';

import styles from './styles'

const friendItem = ({ name, address, onClick }) => {

    const { container, userInfoStyle, itemStyle } = styles;

    return (
        <TouchableOpacity style={container} onPress={onClick} >
            <Avatar /> 
            <View style={userInfoStyle}>
                <Text style={itemStyle}>USER NAME</Text>
                <Text style={itemStyle}>USER ADDRESS</Text>
            </View>
        </TouchableOpacity>
    );
}

export default friendItem;
