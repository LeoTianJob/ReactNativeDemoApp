import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

const avatar = () => {
    return (
        <Image source={{ uri: 'https://via.placeholder.com/150/92c952'}} style={{width: 50, height: 50}}/>
    );
}

export default avatar;