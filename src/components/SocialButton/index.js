import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles';
import { etonBlue } from '../../styles/colors';

const socialButton = ({ name,
    size,
    btnTxt,
    onClick,
    textColor,
    btnColor,
    disabled,
    height,
    containerStyle
}) => {
    const { container } = styles;
    return (
        <TouchableOpacity onPress={onClick}
            style={[container, {
                backgroundColor: btnColor,
                borderWidth: 1,
                borderColor: textColor,
                height
            },
                containerStyle
            ]}
            disabled={disabled}>
            <Icon name={name} size={size} color={textColor} />
            <Text
                style={{ color: textColor, marginLeft: size / 2, fontSize: size * 3 / 4 }}
                selectable
                ellipsizeMode="tail"
            >
                {btnTxt}
            </Text>
        </TouchableOpacity>
    );
}

socialButton.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    btnTxt: PropTypes.string,
    onClick: PropTypes.func,
    btnColor: PropTypes.string,
    disabled: PropTypes.bool,
    height: PropTypes.number,
    containerStyle: PropTypes.object
}

socialButton.defaultProps = {
    name: 'user',
    size: 25,
    btnTxt: 'Button',
    onClick: () => { },
    btnColor: etonBlue,
    disabled: false,
    height: 25 * 2,
    containerStyle: {}
}

export default socialButton;
