import { StyleSheet } from 'react-native';
import { pureWhite } from '../../styles/colors';
import { defaultFontBold, defaultFont } from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        minHeight: 200,
        backgroundColor: pureWhite,
        marginTop: 20
    },
    titleStyle: {
        flex: 1,
        padding: 5,
        justifyContent: 'center'
    },
    titleTextStyle: {
        fontFamily: defaultFontBold,
        fontSize: 16
    },
    photoContainerStyle: {
        flex: 4,
        flexDirection: 'row'
    },
    userContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    usernameTextStyle: {
        fontFamily: defaultFont,
        fontSize: 12,
        marginLeft: 10
    }
});
