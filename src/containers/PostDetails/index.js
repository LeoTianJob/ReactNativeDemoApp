import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Loading from '../../components/Loading';

import axios from '../../utilities/axios';
import FriendItem from '../../components/FriendItem';
import Avatar from '../../components/Avatar';
import TextInputBar from '../../components/TextInputBar';

import styles from './styles';

class PostDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            loading: true
        }
    }

    componentDidMount() {

        const postId = this.props.post.id;

        axios.get(`/comments?postId=${postId}`)
            .then(res => {
                console.log(res)
                this.setState({
                    comments: res.data,
                    loading: false
                })
            })
            .catch(err => {

            });
    }

    render() {

        const {
            container,
            separatorVertical,
            headerStyle,
            bodyStyle,
            avatarStyle,
            usernameStyle,
            titleContainerStyle,
            titleStyle
        } = styles;

        const { loading } = this.state;

        const {
            username,
            title,
            body,
        } = this.props.post;

        console.log(this.props.post)

        if (loading) {
            return <Loading />
        }

        return (
            <View style={container}>
                <View style={headerStyle}>
                    <View style={avatarStyle}>
                        <Avatar size={32} />
                        <Text style={usernameStyle}>{username}</Text>
                    </View>
                    <View style={separatorVertical} />
                    <View style={titleContainerStyle}>
                        <Text style={titleStyle}>{title}</Text>
                    </View>
                </View>
                <ScrollView style={bodyStyle}>
                    <Text style={{}}>
                        {body}
                    </Text>
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                </ScrollView>
                <TextInputBar />
            </View>
        );
    }

}

export default PostDetails;
