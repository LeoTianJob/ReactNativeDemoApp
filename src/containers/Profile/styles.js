
import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1
    },
    bgImgStyle: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH / 2
    }
});
