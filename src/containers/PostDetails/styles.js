import { StyleSheet } from 'react-native';

import { darkGrey, lightGrey } from '../../styles/colors';
import { defaultFont, defaultFontBold } from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
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
        height: 1000,
        backgroundColor: 'yellow'
    }
});

