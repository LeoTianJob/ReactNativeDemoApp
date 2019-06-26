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
        axios.get(`/photos?id=${userId}`) // The same reason with profile for using photo id here.
            .then(res => {
                Navigation.push(this.props.componentId,
                    {
                        component: {
                            name: PROFILE_PAGE,
                            passProps: {
                                friend: {
                                    ...selectedFriend,
                                    url: res.data[0].url,
                                    thumbnailUrl: res.data[0].thumbnailUrl
                                }
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
                    });
            })
            .catch(err => {

            })

    }

    render() {
        const { container } = styles;
        const { friendsList } = this.state;

        if (friendsList) {

            return (
                <View style={container}>
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        data={friendsList}
                        renderItem={({ item }) =>
                            <FriendItem name={item.name} w
                                ebsite={item.website} onClick={() => this.onClickFriendItem(item.id)}
                            />}
                    />
                </View>
            );
        }

        return <Loading />
    }
}

export default Friends;
