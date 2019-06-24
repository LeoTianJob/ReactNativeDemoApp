import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

import Avatar from '../../components/Avatar';

class Profile extends Component {

    componentDidMount() {
        // Assume the current login user's id = 1
        
    }

    render() {
        return (
            <SafeAreaView>
                <Avatar />
                <Text>Test</Text>
            </SafeAreaView>
        );
    }
}

export default Profile;