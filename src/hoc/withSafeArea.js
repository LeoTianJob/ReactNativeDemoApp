import React, { Component } from 'react';
import { SafeAreaView, ImageBackground, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const withSafeArea = (WrappedComponent) => {
    const { safearea, bgImgStyle } = styles;
    return props => {
        return (
            <ImageBackground source={require('../assets/images/bgImg.jpg')} style={bgImgStyle} >
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

export default withSafeArea;