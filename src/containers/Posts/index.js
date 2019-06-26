import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

import axios from '../../utilities/axios';
import PostItem from '../../components/PostItem';
import Loading from '../../components/Loading';

import styles from './styles';

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postlist: [],
            userlist: [],
            loading: false
        }
    }

    componentDidMount() {
        
        this.setState({loading: true});

        Promise.all([
            axios.get('/posts'),
            axios.get('/users')
        ]).then(res => {
            console.log('res =======>');
            console.log(res);
            [postRes, userRes] = res;
            this.setState({
                postList: postRes.data,
                userList: userRes.data,
                loading: false 
            })
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

    render() {
        
        const { loading } = this.state;
        const { container } = styles;

        if (loading) {
            return <Loading />
        }

        return (
            <View>
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </View>
        );
    }
}

export default Posts;
