import { StyleSheet } from 'react-native';
import { darkGrey, lightGrey } from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: darkGrey
    },
    iconContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputContainerStyle: {
        flex: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    textInputStyle: {
        backgroundColor: lightGrey,
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10
    }
});
