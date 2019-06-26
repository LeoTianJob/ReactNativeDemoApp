import { StyleSheet, Dimensions } from 'react-native'
import { darkGrey, pureWhite } from '../../styles/colors';
import { defaultFont } from '../../styles/fonts';

export const POST_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: POST_WIDTH,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: darkGrey,
        justifyContent: 'center',
        backgroundColor: pureWhite,
        padding: 10
    },
    avatarContainerStyle: {
        flex: 1,
        alignItems: 'center'
    },
    contentContainerStyle: {
        flex: 3,
        paddingHorizontal: 10
    },
    usernameStyle: {
        flex: 1,
        fontFamily: defaultFont,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 12,
        paddingTop: 10
    },
    postContainerStyle: {
        flex: 1,
        padding: 5,
        borderWidth: 1,
        borderColor: darkGrey,
        borderRadius: 10
    },
    postTitleStyle: {
        fontFamily: defaultFont,
        fontSize: 16,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    postConentStyle: {
        fontFamily: defaultFont,
        fontSize: 12,
        padding: 5,
        lineHeight: 18
    },
    socialBtnContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 10,
        marginTop: 5
    }
});
