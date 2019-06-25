import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import axios from '../../utilities/axios';

import FriendItem from '../../components/FriendItem';
import Loading from '../../components/Loading';

import styles from './styles';
class Friends extends Component {

    // Since Todo and Profile use redux to fetch and save data, 
    // here I will use local state, just to show how to use local state.
    constructor(props) {
        super(props);

        this.state = {
            friendsList: null,
            start: 0,
            limit: 10
        }
    }

    componentDidMount() {
        const { start, limit, friendsList } = this.state;
        if (friendsList === null) {
            axios.get(`/users?_start=${start}&_limit=${limit}`)
                .then(res => {
                    console.log('----res-------->');
                    console.log(res);
                    this.setState({
                        friendsList: res.data
                    })
                })
                .catch(err => {
                    console.log('----err-------->');
                    console.log(err);
                });
        }
    }

    componentWillUnmount() {
        this.setState({ friendsList: null });
    }

    formattedAddress = (address) => {
        [street, suite, city, zipcode] = Object.keys(address).map(key => address[key]);
        return "".concat([suite, street, city, zipcode]);
    }

    render() {
        const { container } = styles;
        const { friendsList } = this.state;
        
        if (this.state.friendsList) {
            
            return (
                <View style={container}>
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        data={friendsList}
                        renderItem={({ item }) => <FriendItem name={item.name} address={this.formattedAddress(item.address)} />}
                    />
                </View>
            );
        }
        return <Loading />

    }
}

export default Friends;
