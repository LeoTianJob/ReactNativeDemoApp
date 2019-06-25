import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import Avatar from '../../components/Avatar';

import { getCurrentUser } from '../../store/actions';

import styles from './styles';

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchLoginUser()
    }

    render() {

        const { loginUser } = this.props;

        console.log(loginUser)

        return (
            <View>
                <Avatar />
                <Text>{JSON.stringify(loginUser)}</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ loginUser }) => ({ userInfo: loginUser });

const mapDispatchToProps = dispatch => {
    return {
        fetchLoginUser: () => dispatch(getCurrentUser(1)) // Assume the login user id = 1
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
// export default (Profile);