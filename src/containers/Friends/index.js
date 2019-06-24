import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

import styles from './styles';
class Friends extends Component {
    render() {
        const { container } = styles;

        return (
            <SafeAreaView style={container}>
                <Text> This is Friends page</Text>
            </SafeAreaView>
        );
    }
}

export default Friends;
