import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';

import styles from './styles';

const postItem = ({ avatarUri, username, title, content }) => {

    const { 
        container,
        avatarContainerStyle,
        contentContainerStyle,
        usernameStyle,
        postContainerStyle,
        postTitleStyle,
        postConentStyle
     } = styles;

    return (
        <View style={container}>
            <View style={avatarContainerStyle}>
                <Avatar imgUri={avatarUri} />
                <Text style={usernameStyle}>{username}</Text>
            </View>
            <View style={contentContainerStyle}>
                <Text style={postTitleStyle}>{title}</Text>
                <View style={postContainerStyle}>
                    <Text style={postConentStyle}>{content}</Text>
                </View>
            </View>
        </View>
    );
}

postItem.propTypes = {
    username: PropTypes.string,
    avatarUrl: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
}

postItem.defaultProps = {
    username: 'User Name',
    avatarUrl: null,
    title: 'Post Title',
    content: 'Post Content'
}

export default postItem;
