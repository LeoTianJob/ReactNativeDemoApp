import { StyleSheet } from 'react-native'
import { darkGrey } from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
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
    }
});
