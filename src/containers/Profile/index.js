import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import Avatar from '../../components/Avatar';

import { getCurrentUser } from '../../store/actions';

import styles from './styles';
import { americanGreen } from '../../styles/colors';

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchLoginUser(1);
    }

    render() {

        const { loginUser: { userInfo, loading} } = this.props;

        console.log(userInfo)

        if (loading) {
            return <ActivityIndicator size="large" color={americanGreen}/>
        } else {
            return (
                <View>
                    <Avatar />
                    <Text>{JSON.stringify(userInfo)}</Text>
                </View>
            );
        }
    }
}

const mapStateToProps = ({ loginUser }) => ({ loginUser });

const mapDispatchToProps = dispatch => {
    return {
        fetchLoginUser: (userId) => dispatch(getCurrentUser(userId)) // Assume the login user id = 1
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
// export default (Profile);