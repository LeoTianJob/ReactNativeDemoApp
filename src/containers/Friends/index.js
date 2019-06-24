import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

import FriendItem from '../../components/FriendItem';

import styles from './styles';
class Friends extends Component {
    render() {
        const { container } = styles;

        return (
            <SafeAreaView style={container}>
                <FriendItem />
                <FriendItem />
            </SafeAreaView>
        );
    }
}

export default Friends;
