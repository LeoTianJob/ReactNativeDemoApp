import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux'

import axios from '../../utilities/axios';

import styles from './styles';

// I uses state and redux for Album page
class Albums extends Component {

    constructor(props) {
        super(props);

        this.state = {
            albumlist: [],
            loading: true,
        }
    }

    componentWillUpdate() {
        const loginUser = this.props.userInfo;
        console.log('----componentWillUpdate------')
        console.log(loginUser);
    }

    componentDidMount() {
        // Here I only handle albums of login user, which is user id = 1
        const loginUser = this.props.userInfo;
        
        console.log(loginUser);

        axios.get(`/albums?userId=${1}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {

            });

    }

    render() {
        const { container } = styles;

        return (
            <SafeAreaView style={container}>
                <Text> This is Albums page</Text>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = ({ loginUser: { userInfo } }) => ({ userInfo });

export default connect(mapStateToProps, null)(Albums);
