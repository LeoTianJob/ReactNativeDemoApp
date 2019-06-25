import React, { Component } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';

import axios from '../../utilities/axios';

import FriendItem from '../../components/FriendItem';
import Loading from '../../components/Loading';

import styles from './styles';
import { PROFILE_PAGE } from '../../navigation/screens';
import { TOPBAR_FONT_SIZE, TOPBAR_TEXT_COLOR, BG_COLOR } from '../../navigation/navigation';
import { defaultFont } from '../../styles/fonts';

class Friends extends Component {

    // Since Todo and Profile use redux to fetch and save data, 
    // here I will use local state, just to show how to use local state.
    constructor(props) {
        super(props);

        this.state = {
            friendsList: null,
            start: 0,
            limit: 10,
            isloading: false,
            isRefreshing: false
        }
    }

    componentDidMount() {
        const { friendsList } = this.state;
        if (friendsList === null) {
            axios.get(`/users`)
                .then(res => {
                    this.setState({
                        friendsList: res.data
                    })
                })
                .catch(err => {
                    Alert.alert(
                        'ERROR',
                        err,
                        [
                            { text: 'OK', onPress: () => { } },
                        ],
                        { cancelable: true },
                    );
                });
        }
    }

    componentWillUnmount() {
        this.setState({ friendsList: null });
    }

    onClickFriendItem = (userId) => {

        const selectedFriend = this.state.friendsList.filter(user => user.id === userId)[0];
        
        Navigation.push(this.props.componentId, 
            {
                component: {
                    name: PROFILE_PAGE,
                    passProps: {
                        friend: selectedFriend
                    },
                    options: {
                        topBar: {
                            title: {
                                text: `${selectedFriend.name}`,
                                fontFamily: defaultFont,
                                fontSize: TOPBAR_FONT_SIZE,
                                color: TOPBAR_TEXT_COLOR
                            },
                            background: {
                                color: BG_COLOR
                            }
                        }
                    }
                }
            })
    }

     /*
   
    loadMoreFriends = () => {
        const { start, limit } = this.state;
        console.log(`/users?_start=${start + limit}&_limit=${limit}`)
        axios.get(`/users?_start=${start + limit}&_limit=${limit}`)
            .then(res => {

                if (res.data.length > 0) {
                    newFriendsList = [...this.state.friendsList]
                    newFriendsList.concat(res.data)
                    this.setState((preState) => {
                        return {
                            isloading: false,
                            start: preState.start + preState.limit,
                            friendsList: newFriendsList
                        }
                    });
                } else {
                    Alert.alert(
                        "",
                        "There are no more friends!",
                        [
                            { text: 'OK', onPress: () => this.setState({ isloading: false}) },
                        ],
                        { cancelable: false },
                    );
                }

            })
            .catch(err => {
                Alert.alert(
                    'ERROR',
                    err,
                    [
                        { text: 'OK', onPress: () => { } },
                    ],
                    { cancelable: true },
                );
            });
    }
    */
    render() {
        const { container } = styles;
        const { friendsList } = this.state;

        if (friendsList) {

            return (
                <View style={container}>
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        data={friendsList}
                        renderItem={({ item }) => <FriendItem name={item.name} website={item.website} onClick={() => this.onClickFriendItem(item.id)} />}
                    // ListFooterComponent={this.state.isloading ? <Loading size="small" /> : null}
                    // onEndReachedThreshold={0.4}
                    // onEndReached={() => this.loadMoreFriends()}
                    />
                </View>
            );
        }

        return <Loading />
    }
}

export default Friends;
