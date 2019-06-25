import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import Avatar from '../../components/Avatar';
import Loading from '../../components/Loading';

import { getLoginUser, getLoginUserImg } from '../../store/actions';

import styles from './styles';

const LOGIN_USER_ID = 1;
class Profile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { friend } = this.props;

        if (!friend) {
            this.props.fetchLoginUserImg(LOGIN_USER_ID);
            this.props.fetchLoginUser(LOGIN_USER_ID);
        }
    }

    render() {

        const { bgImgStyle } = styles;
        const { loginUser: { userInfo, loadingUser, loadingImg }, friend } = this.props;

        if (loadingUser || loadingImg) {
            return <Loading />
        }

        let profileInfo = !friend ? userInfo : friend;

        const {
            name,
            url,
            thumbnailUrl
        } = profileInfo;

        return (
            <View>
                <ImageBackground source={{ uri: url }} style={bgImgStyle}>
                    <Avatar imgUri={thumbnailUrl} />
                </ImageBackground>
                <Text>{JSON.stringify(profileInfo)}</Text>
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