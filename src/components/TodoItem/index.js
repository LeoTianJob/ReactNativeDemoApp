import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const ICON_SIZE = 20;

const todoItem = ({ title, completed, onFocus }) => {

    const {container, titleStyle, removeLineStyle} = styles;

    return (
        <View style={container}>
            {completed ? <Icon name="check-square" size={ICON_SIZE} /> : <Icon name="square" size={ICON_SIZE} />}
            <TextInput 
                style={titleStyle} 
                editable={!completed}
                onFocus = {onFocus}
            >
                {title}
            </TextInput>
            <Icon name="star" size={ICON_SIZE} />
            { completed ? <View style={removeLineStyle}/> : null}
        </View>
    );
}

todoItem.propTypes = {
    title: PropTypes.string,
    completed: PropTypes.bool,
    onFocus: PropTypes.func,
}

todoItem.defaultProps = {
    title: "",
    completed: false,
    onFocus: () => {}
}

export default todoItem;
