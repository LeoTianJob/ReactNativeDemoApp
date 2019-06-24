import React, { Component } from 'react';
import { Text, View } from 'react-native';

import FriendItem from '../../components/FriendItem';

import styles from './styles';
class Friends extends Component {
    render() {
        const { container } = styles;

        return (
            <View>
                <FriendItem />
                <FriendItem />
            </View>
        );
    }
}

export default Friends;
