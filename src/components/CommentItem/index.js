import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const commentItem = ({ email, name, comment }) => {

    const { container, separator } = styles;

    return (
        <View style={container}>
            <View>
                <Text>{name}</Text>
                <View style={separator} />
                <Text>{email}</Text>
            </View>
            <View style={separator} />
            <Text>{comment}</Text>
        </View>
    );
}

commentItem.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    comment: PropTypes.string,
};

commentItem.defaultProps = {
    name: 'user name',
    email: 'user email',
    comment: 'user comment',
}

export default commentItem;
