import React, { Component } from 'react';
import { FlatList, View, Alert } from 'react-native';

import axios from '../../utilities/axios';
import PostItem from '../../components/PostItem';
import Loading from '../../components/Loading';

import styles from './styles';

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
        
        this.setState({loading: true});

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
            const { id, name} = user;
            userObj[id]= name;
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

    render() {
        
        const { loading, userPostList } = this.state;
        const { container } = styles;

        console.log('userPostList =======>');
        console.log(userPostList)

        if (loading) {
            return <Loading />
        }

        return (
            <View>
                <FlatList
                    keyExtractor={item => item.id}
                    data={userPostList}
                    renderItem={({item}) => 
                        <PostItem 
                            username={item.username}
                            title={item.title}
                            content={item.body}
                        />
                    }
                />
            </View>
        );
    }
}

export default Posts;
