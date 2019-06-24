import { StyleSheet } from 'react-native'
import { darkGrey } from '../../styles/colors';
import { defaultFont } from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'row',
        padding: 15,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: darkGrey,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userInfoStyle: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'space-between'
    },
    itemStyle: {
        marginVertical: 5,
        fontFamily: defaultFont,
        fontSize: 16
    }
});
