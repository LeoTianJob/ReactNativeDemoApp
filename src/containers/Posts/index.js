import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
class Posts extends Component {
    render() {
        const { container } = styles;

        return (
            <SafeAreaView style={container}>
                <Text> This is Posts page</Text>
            </SafeAreaView>
        );
    }
}

export default Posts;
