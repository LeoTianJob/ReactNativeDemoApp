import { StyleSheet, Dimensions } from 'react-native'
import { darkGrey, pureWhite } from '../../styles/colors';

export const POST_WIDTH = Dimensions.get('window').width;
export const MIN_POST_HEIGHT = 150;

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: POST_WIDTH,
        minHeight: MIN_POST_HEIGHT,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: darkGrey,
        justifyContent: 'center',
        backgroundColor: pureWhite,
        padding: 10
    },
    usernameStyle: {

    },
    postContainerStyle: {

    },
    postTitleStyle: {

    },
    postConentStyle: {

    }
});
