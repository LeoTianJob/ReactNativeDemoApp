import React from 'react';
import { Provider, connect } from 'redux';
import { SafeAreaView, ImageBackground, Dimensions, StyleSheet } from 'react-native';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const { width, height } = Dimensions.get('window');

const withRedux = (WrappedComponent) => {
    const {container, bgImgStyle} = styles;
    
    return props => {
        return (
            <ImageBackground source={require('../assets/images/bgImg.jpg')} style={bgImgStyle} >
                <SafeAreaView style={container}>
                    <WrappedComponent {...props} />
                </SafeAreaView>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'rgba(164, 208, 160, 0.9)'
    },
    bgImgStyle: {
        width, 
        height, 
        backgroundColor: 'rgba(164, 208, 160, 0.9)'
    }
})

export default withRedux;