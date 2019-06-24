import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

import styles from './styles'

class Albums extends Component {

    render() {
        const { container } = styles;

        return (
            <SafeAreaView style={container}>
                <Text> This is Albums page</Text>
            </SafeAreaView>
        );
    }
}

export default Albums;
