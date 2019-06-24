import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
class Posts extends Component {
    render() {
        const { container } = styles;

        return (
            <View>
                <Text> This is Posts page</Text>
            </View>
        );
    }
}

export default Posts;
