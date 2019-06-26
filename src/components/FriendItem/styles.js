import { StyleSheet } from 'react-native'
import { darkGrey, pureWhite } from '../../styles/colors';
import { defaultFont } from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        minHeight: 100,
        flexDirection: 'row',
        padding: 15,
        marginHorizontal: 15,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: darkGrey,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: pureWhite,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.35,
        shadowRadius: 6,

        elevation: 10,
    },
    userInfoStyle: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'space-between'
    },
    itemStyle: {
        marginVertical: 5,
        fontFamily: defaultFont,
        fontSize: 14,
        fontWeight: '100'
    }
});
