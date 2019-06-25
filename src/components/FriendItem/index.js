import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from '../../components/Avatar';

import styles from './styles'

const friendItem = ({ name, website, onClick }) => {

    const { container, userInfoStyle, itemStyle } = styles;

    return (
        <TouchableOpacity style={container} onPress={onClick} >
            <Avatar /> 
            <View style={userInfoStyle}>
                <Text style={[itemStyle, {fontWeight: '600'}]}>{name}</Text>
                <Text style={itemStyle}>{website}</Text>
            </View>
        </TouchableOpacity>
    );
}

friendItem.propTypes = {
    name: PropTypes.string,
    website: PropTypes.string,
    onClick: PropTypes.func
}

friendItem.defaultProps = {
    name: '',
    website: '',
    onClick: () => {}
}

export default friendItem;
