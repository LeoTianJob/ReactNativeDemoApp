import React, { Component } from 'react';
import { FlatList, View, Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';

import axios from '../../utilities/axios';
import PostItem from '../../components/PostItem';
import Loading from '../../components/Loading';

import styles from './styles';
import { POST_DETAILS } from '../../navigation/screens';
import { defaultFont } from '../../styles/fonts';
import { TOPBAR_FONT_SIZE, TOPBAR_TEXT_COLOR, BG_COLOR } from '../../navigation/navigation';

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userPostList: [],
            allUsers: [],
            loading: false
        }
    }

    componentDidMount() {

        this.setState({ loading: true });

        Promise.all([
            axios.get('/posts'),
            axios.get('/users')
        ]).then(res => {
            [postRes, userRes] = res;

            const plist = postRes.data;
            const allUsers = userRes.data;

            const userPostList = this.getUserPostList(allUsers, plist);

            this.setState({
                userPostList,
                allUsers,
                loading: false
            });

        }).catch(err => {
            Alert.alert(
                'ERROR',
                err,
                [
                    { text: 'OK', onPress: () => { } },
                ],
                { cancelable: true },
            );
        })
    }

    getUserPostList = (ulist, plist) => {
        userObj = ulist.reduce((userObj, user) => {
            const { id, name } = user;
            userObj[id] = name;
            return userObj;
        }, {});

        const uplist = plist.map((post) => {
            const newpost = {
                username: userObj[post.userId],
                ...post
            };

            return newpost;
        });

        return uplist;
    }

    onClickPost = (post) => {
        Navigation.push(this.props.componentId,
            {
                component: {
                    name: POST_DETAILS,
                    passProps: {
                        post
                    },
                    options: {
                        topBar: {
                            title: {
                                text: 'Post',
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
    }

    render() {

        const { loading, userPostList } = this.state;
        const { container } = styles;

        if (loading) {
            return <Loading />
        }

        return (
            <View>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={userPostList}
                    renderItem={({ item }) =>
                        <PostItem
                            username={item.username}
                            title={item.title}
                            content={item.body}
                            onClick={() => this.onClickPost(item)}
                        />}
                    ListFooterComponent={this.state.isloading ? <Loading size="small" /> : null}
                    onEndReachedThreshold={0.4}
                    onEndReached={() => { }}
                />
            </View>
        );
    }
}

export default Posts;
