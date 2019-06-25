import React, { Component } from 'react';
import { connect } from  'react-redux';
import { Text, View } from 'react-native';

import TodoItem from '../../components/TodoItem';

import styles from './styles';
class Todos extends Component {
    render() {

        const { container } = styles;

        return (
            <View style={container}>
               <TodoItem />
               <TodoItem />
            </View>
        );
    }
}

export default Todos;