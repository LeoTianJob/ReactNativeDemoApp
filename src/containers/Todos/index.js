import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ActivityIndicator, FlatList, ScrollView } from 'react-native';

import TodoItem from '../../components/TodoItem';

import { getUserTodoItems } from '../../store/actions';

import styles from './styles';
import { americanGreen } from '../../styles/colors';
class Todos extends Component {

    componentDidMount() {
        this.props.fetchUserTodoItems(1); // login user id = 1
    }

    render() {

        const { container  } = styles;

        const { userTodo: { todoList, loading } } = this.props;

        if (loading) {
            return <ActivityIndicator size="large" color={americanGreen} />
        } else {
            
            const completedTodo = [];
            const uncompletedTodo = [];

            todoList.forEach((todo) => todo.completed ? completedTodo.push(todo) : uncompletedTodo.push(todo));
            const data = uncompletedTodo.concat(completedTodo);

            return (
                <View style={container}>
                    <FlatList
                        keyExtractor={ item => item.id.toString()}
                        data={data}
                        renderItem={({ item }) => <TodoItem title={item.title} completed={item.completed} />}
                    />
                    <Text>{JSON.stringify(this.props.loginUser)}</Text>
                    
                </View>
            );
        }
    }
}

const mapStateToProps = ({ loginUser: { userInfo }, userTodo }) => ({ userInfo, userTodo });

const mapDispatchToProps = dispatch => {
    return {
        fetchUserTodoItems: (userId) => dispatch(getUserTodoItems(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
