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
        marginVertical: 2,
        marginHorizontal: 5,
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
        flex: 1,
        fontFamily: defaultFont,
        fontWeight: "100",
        fontSize: 14,
        marginHorizontal: 20,
        textAlign: 'left'
    },
    removeLineStyle: {
        position: 'absolute',
        height: StyleSheet.hairlineWidth,
        width: Dimensions.get('window').width - 10,
        backgroundColor: pureBlack,
        top: ITEM_HEIGHT / 2
    }
});
