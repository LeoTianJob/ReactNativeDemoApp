import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';

import styles from './styles';

const postItem = ({ avatarUri, username, title, content }) => {

    const { container } = styles;

    return (
        <View style={ container }>
            <Avatar imgUri={avatarUri} />
            <View>
                <Text>{username}</Text>
                <View>
                    <Text>{title}</Text>
                    <Text>{content}</Text>
                </View>
            </View>
            <View />
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
    titile: 'Post Title',
    content: 'Post Content'
}

export default postItem;
