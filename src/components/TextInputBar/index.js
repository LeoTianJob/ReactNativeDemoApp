import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const textInputBar = ({ iconSize, leftIconName, rightIconName, height, iconColor }) => {

    const {
        container,
        iconContainerStyle,
        textInputContainerStyle,
        textInputStyle
    } = styles;

    return (
        <View style={[container, { height }]}>
            <View style={iconContainerStyle}>
                <Icon name={leftIconName} size={iconSize} color={iconColor} />
            </View>
            <View style={textInputContainerStyle}>
                <TextInput style={[textInputStyle, { height: height * 0.6 }]} />
            </View>
            <View style={iconContainerStyle}>
                <Icon name={rightIconName} size={iconSize} color={iconColor} />
            </View>
        </View>
    );
}

textInputBar.propTypes = {
    height: PropTypes.number,
    iconSize: PropTypes.number,
    iconName: PropTypes.string,
    iconColor: PropTypes.string
};

textInputBar.defaultProps = {
    height: 50,
    iconSize: 20,
    leftIconName: 'edit',
    rightIconName: 'send-o',
    iconColor: '#d3d3d3'
};

export default textInputBar
