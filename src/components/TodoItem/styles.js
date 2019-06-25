import { StyleSheet, Dimensions } from 'react-native'
import { darkGrey, pureWhite, pureBlack } from '../../styles/colors';
import { defaultFont } from '../../styles/fonts';

const ITEM_HEIGHT = 40;

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        height: ITEM_HEIGHT,
        marginVertical: 1,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: darkGrey,
        alignItems: 'center',
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
    titleStyle: {
        fontFamily: defaultFont,
        fontSize: 10
    },
    removeLineStyle: {
        position: 'absolute',
        height: StyleSheet.hairlineWidth,
        width: Dimensions.get('window').width,
        borderWidth: 0.5,
        borderColor: pureBlack,
        top: ITEM_HEIGHT / 2
    }
});
