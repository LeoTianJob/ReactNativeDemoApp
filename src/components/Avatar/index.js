import React from 'react';
import { Image } from 'react-native';

const avatar = ({ imgUri = null, size = 64}) => {
    const source = imgUri ? { uri: imgUri} : require('../../assets/images/user.png');

    return (
        <Image 
            source={source} 
            style={{width: size, height: size, borderRadius: size / 2}}
        />
    );
}

export default avatar;