import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import { pureWhite } from '../../styles/colors';

class PhotoDetails extends Component {

    closeModal = () => {
        Navigation.dismissModal(this.props.componentId);
    }

    render() {
        const { container, closeStyle, imageStyle } = styles;

        return (
            <View style={container}>
                <Icon name="close" style={closeStyle} size={50} color={pureWhite} onPress={this.closeModal} />
                <Image source={{ uri: this.props.photo.url }} style={imageStyle} resizeMode='contain' />
            </View>
        );
    }

}

export default PhotoDetails;
