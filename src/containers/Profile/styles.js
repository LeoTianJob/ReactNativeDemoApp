
import { StyleSheet, Dimensions } from 'react-native';
import { pureBlack, pureWhite, lightGrey, darkGrey } from '../../styles/colors';
import { defaultFont } from '../../styles/fonts';

export const PROFILE_PHOTO_WIDTH = Dimensions.get('window').width - 50;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    bgContainerStyle: {
        backgroundColor: pureWhite,
        width: PROFILE_PHOTO_WIDTH,
        height: PROFILE_PHOTO_WIDTH,
        marginTop: 25,
        borderRadius: 20,
        overflow:'hidden',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 10
    },
    bgImgStyle: {
        width: PROFILE_PHOTO_WIDTH,
        height: PROFILE_PHOTO_WIDTH / 2,
    },
    avatarStyle: {
        position: 'absolute',
        borderWidth: 3,
        borderColor: pureWhite,
        tintColor: darkGrey,
        top: PROFILE_PHOTO_WIDTH / 2 - 64
    },
    nameContainerStyle: {
        width: PROFILE_PHOTO_WIDTH,
        height: PROFILE_PHOTO_WIDTH / 2, 
        justifyContent:'space-around', 
        alignItems: 'center',
    },
    nameStyle: {
        fontFamily: defaultFont,
        fontWeight: '700',
        fontSize: 20,
        marginTop: 55
    },
    separatorStyle: {
        width: PROFILE_PHOTO_WIDTH,
        height: StyleSheet.hairlineWidth,
        backgroundColor: darkGrey,
        zIndex: 10,
    },
    userInfoStyle: {
        width: PROFILE_PHOTO_WIDTH, 
        backgroundColor: pureWhite,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        marginTop: -20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
