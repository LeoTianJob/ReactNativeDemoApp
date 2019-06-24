import React, { Component } from 'react';
import { connect } from  'react-redux';
import { Text, SafeAreaView } from 'react-native';

import styles from './styles';
class Todos extends Component {
    render() {

        const { container } = styles;

        return (
            <SafeAreaView style={container}>
                <Text> This is Todos page</Text>
            </SafeAreaView>
        );
    }
}

export default Todos;