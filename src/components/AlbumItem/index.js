import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Photo from '../Photo';
import Avatar from '../Avatar';

import styles from './styles';

const albumItem = ({ title, username, thumbnails, onClick }) => {
    const {
        container,
        titleStyle,
        titleTextStyle,
        photoContainerStyle,
        userContainerStyle,
        usernameTextStyle
    } = styles;
    return (
        <TouchableOpacity style={container} activeOpacity={0.85} onPress={onClick}>
            <View style={titleStyle}>
                <Text style={titleTextStyle}>{title}</Text>
            </View>
            <View style={photoContainerStyle}>
                {thumbnails.map((uri, idx) => idx <= 2 ? <Photo key={idx} imgUri={uri} disabled /> : null)}
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
    username: PropTypes.string,
    thumbnails: PropTypes.array,
    onClick: PropTypes.func
};

albumItem.defaultProps = {
    title: 'Alumn Title',
    username: 'User Name',
    thumbnails: [null, null, null],
    onClick: () => { }
};

export default albumItem;
