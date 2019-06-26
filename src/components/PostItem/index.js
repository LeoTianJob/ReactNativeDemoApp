import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';
import { POST_WIDTH, MIN_POST_HEIGHT } from './styles';
import { darkGrey, pureWhite, lightGrey } from '../../styles/colors';
import { defaultFont, defaultFontBold } from '../../styles/fonts';

// import styles from './styles';

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

const styles =  StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: POST_WIDTH,
        minHeight: 150,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: darkGrey,
        justifyContent: 'center',
        backgroundColor: pureWhite,
        padding: 10
    },
    avatarContainerStyle: {
        flex: 1,
        alignItems: 'center'
    },
    contentContainerStyle: {
        flex: 3,
        height: MIN_POST_HEIGHT,
        paddingHorizontal: 10
    },
    usernameStyle: {
        flex: 1,
        fontFamily: defaultFont,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 12,
        paddingTop: 10
    },
    postContainerStyle: {
        flex: 1,
        padding: 5,
        borderWidth: 1,
        borderColor: darkGrey,
        borderRadius: 10
    },
    postTitleStyle: {
        fontFamily: defaultFont,
        fontSize: 16,
        padding: 5,
    },
    postConentStyle: {
        fontFamily: defaultFont,
        fontSize: 12
    }
});
