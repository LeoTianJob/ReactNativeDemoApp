import React from 'react';
import { Provider, connect } from 'redux';
import { SafeAreaView, ImageBackground, Dimensions, StyleSheet } from 'react-native';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const { width, height } = Dimensions.get('window');

const withRedux = (WrappedComponent) => {
    const {safearea, bgImgStyle} = styles;
    
    return props => {
        return (
            <ImageBackground source={require('../assets/images/bgImg2.jpg')} style={bgImgStyle} >
                <SafeAreaView style={safearea}>
                    <WrappedComponent {...props} />
                </SafeAreaView>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    safearea: {
        flex: 1, 
        backgroundColor: 'rgba(164, 208, 160, 0.8)' // etonBlue
    },
    bgImgStyle: {
        width, 
        height
    }
})

export default withRedux;