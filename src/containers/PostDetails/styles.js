import { StyleSheet, Dimensions } from 'react-native';

import { darkGrey, lightGrey } from '../../styles/colors';
import { defaultFont, defaultFontBold } from '../../styles/fonts';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1
    },
    separatorVertical: {
        borderWidth: 0.5,
        borderColor: darkGrey,
        height: 30
    },
    headerStyle: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: darkGrey
    },
    avatarStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    usernameStyle: {
        fontFamily: defaultFont,
        fontSize: 10
    },
    titleContainerStyle: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 5
    },
    titleStyle: {
        fontFamily: defaultFontBold,
        fontSize: 15,
        lineHeight: 15
    },
    bodyStyle: {
        flex: 1,
        padding: 5
    },
    postContentStyle: {
        fontSize: 20,
        fontFamily: defaultFont,
        padding: 10,
        lineHeight: 30
    },
    separatorHorizontal: {
        width: SCREEN_WIDTH - 20,
        borderBottomWidth: 0.5,
        borderBottomColor: darkGrey,
        height: StyleSheet.hairlineWidth
    }
});

