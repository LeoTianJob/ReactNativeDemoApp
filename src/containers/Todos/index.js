import React, { Component } from 'react';
import { connect } from  'react-redux';
import { Text, View } from 'react-native';

import styles from './styles';
class Todos extends Component {
    render() {

        const { container } = styles;

        return (
            <View style={container}>
                <Text> This is Todos page</Text>
            </View>
        );
    }
}

export default Todos;