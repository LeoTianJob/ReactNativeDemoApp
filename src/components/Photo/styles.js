import { StyleSheet, Dimensions } from 'react-native';
import { pureWhite } from '../../styles/colors';

const PHOTO_WIDTH = Dimensions.get('window').width / 3 - 2

export default StyleSheet.create({
    container: {
        width: PHOTO_WIDTH,
        height: PHOTO_WIDTH,
        overflow: "hidden",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: pureWhite
    },
    imgStyle: {
        width: PHOTO_WIDTH,
        height: PHOTO_WIDTH
    }
});
