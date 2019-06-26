import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Photo from '../Photo';
import Avatar from '../Avatar';

import styles from './styles';

const albumItem = ({ title, username }) => {
    const {
        container,
        titleStyle,
        titleTextStyle,
        photoContainerStyle,
        userContainerStyle,
        usernameTextStyle
    } = styles;
    return (
        <TouchableOpacity style={container}>
            <View style={titleStyle}>
                <Text style={titleTextStyle}>{title}</Text>
            </View>
            <View style={photoContainerStyle}>
                <Photo disabled />
                <Photo disabled />
                <Photo disabled />
            </View>
            <View style={userContainerStyle}>
                <Avatar size={30} />
                <Text style={usernameTextStyle}>{username}</Text>
            </View>
        </TouchableOpacity>
    );
}

albumItem.propTypes = {
    title: PropTypes.string,
    username: PropTypes.string
};

albumItem.defaultProps = {
    title: 'Alumn Title',
    username: 'User Name'
};

export default albumItem;
