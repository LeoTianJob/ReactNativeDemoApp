import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';
import SocialButton from '../SocialButton';

import styles from './styles';
import { darkGrey, pureWhite } from '../../styles/colors';

const postItem = ({ avatarUri, username, title, content, onClick }) => {

    const {
        container,
        avatarContainerStyle,
        contentContainerStyle,
        usernameStyle,
        postContainerStyle,
        postTitleStyle,
        postConentStyle,
        socialBtnContainerStyle
    } = styles;

    return (
        <TouchableOpacity style={container} onPress={onClick} activeOpacity={0.8}>
            <View style={avatarContainerStyle}>
                <Avatar imgUri={avatarUri} />
                <Text style={usernameStyle}>{username}</Text>
            </View>
            <View style={contentContainerStyle}>
                <Text style={postTitleStyle}>{title}</Text>
                <View style={postContainerStyle}>
                    <Text style={postConentStyle}>{content}</Text>
                </View>
                <View style={socialBtnContainerStyle}>
                    <SocialButton
                        height={20}
                        name={'thumbs-o-up'}
                        textColor={darkGrey}
                        btnColor={pureWhite}
                        btnTxt={'Like'}
                        size={15}
                        containerStyle={{
                            flex: 1,
                            padding: 0,
                            justifyContent: 'center',
                            borderWidth: 0
                        }} />
                    <SocialButton
                        height={20}
                        name={'comment-o'}
                        textColor={darkGrey}
                        btnColor={pureWhite}
                        btnTxt={'Comments'}
                        size={15}
                        containerStyle={{
                            flex: 1,
                            padding: 0,
                            justifyContent: 'center',
                            borderWidth: 0
                        }} />
                    <SocialButton
                        height={20}
                        name={'share-square-o'}
                        textColor={darkGrey}
                        btnColor={pureWhite}
                        btnTxt={'Share'}
                        size={15}
                        containerStyle={{
                            flex: 1,
                            padding: 0,
                            justifyContent: 'center',
                            borderWidth: 0
                        }} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

postItem.propTypes = {
    username: PropTypes.string,
    avatarUrl: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    onClick: PropTypes.func
}

postItem.defaultProps = {
    username: 'User Name',
    avatarUrl: null,
    title: 'Post Title',
    content: 'Post Content',
    onClick: () => {}
}

export default postItem;
