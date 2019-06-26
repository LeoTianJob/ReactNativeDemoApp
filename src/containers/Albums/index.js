import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation';

import axios from '../../utilities/axios';
import Loading from '../../components/Loading';
import AlbumItem from '../../components/AlbumItem';

import styles from './styles';
import { defaultFont } from '../../styles/fonts';
import { TOPBAR_FONT_SIZE, TOPBAR_TEXT_COLOR, BG_COLOR } from '../../navigation/navigation';
import { ALBUM_DETAILS_PAGE } from '../../navigation/screens';

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
                .then(({ data }) => {
                    const albumlist = []
                    Promise.all(
                        data.map(album => axios.get(`/photos?albumId=${album.id}&_start=0&_limit=3`))
                    )
                        .then(albumPhotoList => {
                            albumPhotoList.forEach((albumPhotos, idx) => {
                                data[idx]["thumbnails"] = albumPhotos.data.map(photo => photo.thumbnailUrl);
                                albumlist.push(data[idx]);
                            })

                            this.setState({
                                albumlist,
                                loading: false
                            })
                        })
                        .catch(err => {
                            console.log('Fetching albumn photos');
                            console.log(err);
                        });

                })
                .catch(err => {
                    console.log('Fetching albumn failed!');
                    console.log(err);
                });
        }
    }

    onClickAlbum = (album) => {
        Navigation.push(this.props.componentId,
            {
                component: {
                    name: ALBUM_DETAILS_PAGE,
                    passProps: {
                        album
                    },
                    options: {
                        topBar: {
                            title: {
                                text: album.title,
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
                    renderItem={({ item }) =>
                        <AlbumItem
                            title={item.title}
                            username={userInfo.name}
                            thumbnails={item.thumbnails}
                            onClick={() => this.onClickAlbum(item)}
                        />
                    }
                />
            </View>
        );
    }
}

const mapStateToProps = ({ loginUser: { userInfo } }) => ({ userInfo });

export default connect(mapStateToProps, null)(Albums);
