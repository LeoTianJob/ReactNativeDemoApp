import React, { Component } from 'react';
import { SafeAreaView, ImageBackground, Dimensions, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

const withSafeArea = (WrappedComponent, useTabView) => {
    const { safearea, bgImgStyle } = styles;
    return props => {
        return (
            <ImageBackground source={require('../assets/images/bgImg.jpg')} style={bgImgStyle} >
                <SafeAreaView style={safearea}>
                    <WrappedComponent {...props} />
                    {useTabView ? <View style={{ height: 170 }} /> : null}
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

withSafeArea.propTypes = {
    useTabView: PropTypes.bool
}

withSafeArea.defaultProps = {
    useTabView: true
}

export default withSafeArea;