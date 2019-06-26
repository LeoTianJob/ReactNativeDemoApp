import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux'

import axios from '../../utilities/axios';
import Loading from '../../components/Loading';
import AlbumItem from '../../components/AlbumItem';

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

    componentDidUpdate() {
        // We need to fetch album data after we get login user id.
        const loginUser = this.props.userInfo;

        if (this.state.loading) {
            axios.get(`/albums?userId=${loginUser.id}`)
            .then(res => {
                console.log(res);
                this.setState({
                    albumlist: res.data,
                    loading: false
                })
            })
            .catch(err => {

            });
        }
    }

    componentDidMount() {
    }

    render() {
        const { container } = styles;

        const { loading, albumlist } = this.state;

        const { userInfo } = this.props;

        if (loading || userInfo.id <= 0) {
            return <Loading />
        }

        return (
            <View style={container}>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={albumlist}
                    renderItem={({ item }) => <AlbumItem />}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ loginUser: { userInfo } }) => ({ userInfo });

export default connect(mapStateToProps, null)(Albums);
