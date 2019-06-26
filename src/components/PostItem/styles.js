import { StyleSheet, Dimensions } from 'react-native'
import { darkGrey, pureWhite } from '../../styles/colors';

const POST_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        width: POST_WIDTH,
        minHeight: 150,
        marginVertical: 5,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: darkGrey,
        justifyContent: 'center',
        backgroundColor: pureWhite,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.35,
        // shadowRadius: 6,

        // elevation: 10, 
    }
});
