import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from  'react-redux';
import axios from 'axios';

import Avatar from '../../components/Avatar';

import styles from './styles';
class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profileInfo: null
        }
    }

    componentDidMount() {
        // Assume the current login user's id = 1
        // axios.get('https://jsonplaceholder.typicode.com/users/1')
        //     .then(res => {
        //         const { data } = res;
        //         if (this.state.profileInfo === null) {
        //             this.setState({ profileInfo: data })
        //         }
        //     })
        //     .catch(error => {
        //         console.log('Fetching user infomation failed')
        //     })
    }

    render() {
        const { container } = styles;

        return (
            <View>
                <Avatar />
                <Text>{JSON.stringify(this.state.profileInfo)}</Text>
            </View>
        );
    }
}

export default Profile;