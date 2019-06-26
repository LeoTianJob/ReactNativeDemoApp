import React, { Component } from 'react';
import { Text, View, ImageBackground, Animated } from 'react-native';
import { connect } from 'react-redux';

import Avatar from '../../components/Avatar';
import Loading from '../../components/Loading';
import SocialButton from '../../components/SocialButton'

import { getLoginUser, getLoginUserImg } from '../../store/actions';

import styles, { PROFILE_PHOTO_WIDTH } from './styles';
import { darkGrey, pureWhite } from '../../styles/colors';

const LOGIN_USER_ID = 1;
class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showMore: false,
            animation: new Animated.Value(0),
            maxHeight: PROFILE_PHOTO_WIDTH - 50,
        }
    }

    onClickShowMore = () => {

        let finalHeight = this.state.maxHeight
        if (this.state.showMore) {
            this.state.animation.setValue(this.state.maxHeight);
            finalHeight = 0;
        }

        Animated.spring(
            this.state.animation,
            {
                toValue: finalHeight
            }
        ).start()

        this.setState({ showMore: !this.state.showMore });
    }

    componentDidMount() {

        const { friend } = this.props;
        if (!friend) {
            this.props.fetchLoginUserImg(LOGIN_USER_ID);
            this.props.fetchLoginUser(LOGIN_USER_ID);
        }
    }

    formattedAddress = (address) => {
        [street, suite, city, zipcode] = Object.keys(address).map(key => address[key]);
        return "".concat([suite, street, city]);
    }

    render() {

        const {
            container,
            bgImgStyle,
            bgContainerStyle,
            avatarStyle,
            nameContainerStyle,
            nameStyle,
            separatorStyle,
            userInfoStyle
        } = styles;

        const { loginUser: { userInfo, loadingUser, loadingImg }, friend } = this.props;

        if (loadingUser || loadingImg) {
            return <Loading />
        }

        let profileInfo = !friend ? userInfo : friend;

        const {
            name,
            email,
            phone,
            address,
            website,
            url,
            thumbnailUrl,
        } = profileInfo;

        const btnText = this.state.showMore ? "Show Less..." : "Show More..."

        return (
            <View style={container}>
                <View style={bgContainerStyle}>
                    <ImageBackground source={{ uri: url }} style={bgImgStyle} />
                    <Avatar imgUri={thumbnailUrl} size={128} containerStyle={avatarStyle} />
                    <View style={nameContainerStyle}>
                        <Text style={nameStyle}>{name}</Text>
                        <SocialButton name="user" textColor={pureWhite} btnTxt={btnText} height={40}
                            onClick={this.onClickShowMore} />
                    </View>
                </View>
                <View style={separatorStyle} />
                <Animated.View style={[userInfoStyle, { height: this.state.animation }]}>
                    {this.state.showMore ?
                        <View style={{ paddingHorizontal: 20}}>
                            <SocialButton name="envelope" textColor={darkGrey} btnTxt={email} btnColor={pureWhite} size={20} disabled />
                            <View style={{marginVertical: 2}} />
                            <SocialButton name="phone" textColor={darkGrey} btnTxt={phone} btnColor={pureWhite} size={20}  disabled/>
                            <View style={{marginVertical: 2}} />
                            <SocialButton name="address-card" textColor={darkGrey} btnTxt={this.formattedAddress(address)} btnColor={pureWhite} size={20} disabled/>
                            <View style={{marginVertical: 2}} />
                            <SocialButton name="external-link" textColor={darkGrey} btnTxt={website} btnColor={pureWhite} size={20} disabled/>
                        </View>
                        : null
                    }
                </Animated.View>
            </View>
        );

    }
}

const mapStateToProps = ({ loginUser }) => ({ loginUser });

const mapDispatchToProps = dispatch => {
    return {
        fetchLoginUser: (userId) => {
            dispatch(getLoginUser(userId))
        },
        fetchLoginUserImg: (userId) => {
            dispatch(getLoginUserImg(userId))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);