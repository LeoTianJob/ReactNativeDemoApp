import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';

import Photo from '../../components/Photo';
import Loading from '../../components/Loading';
import axios from '../../utilities/axios';

import styles from './styles';
import { PHOTO_DETAILS } from '../../navigation/screens';
import { defaultFont } from '../../styles/fonts';
import { TOPBAR_FONT_SIZE, TOPBAR_TEXT_COLOR, BG_COLOR } from '../../navigation/navigation';

class AlbumDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            loading: true
        }
    }

    componentDidMount() {

        const { album } = this.props;

        if (album) {
            axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`)
                .then(res => {
                    this.setState({
                        photos: res.data,
                        loading: false
                    })
                })
        }

    }

    onClickPhoto = (photo) => {
        Navigation.showModal(
            {
                component: {
                    name: PHOTO_DETAILS,
                    passProps: {
                        photo
                    },
                    options: {
                        topBar: {
                            title: {
                                text: 'Photo',
                                fontFamily: defaultFont,
                                fontSize: TOPBAR_FONT_SIZE,
                                color: TOPBAR_TEXT_COLOR
                            }
                        }
                    }
                }
            }
        );
    }

    constructPhotoLayout = () => {
        const { photos } = this.state;

        let rowPhotos = [];
        // let idxes = [];
        return photos.reduce((finalPhotos, curPhoto, idx) => {

            rowPhotos.push(<Photo key={idx} imgUri={curPhoto.thumbnailUrl} onClick={() => this.onClickPhoto(curPhoto)} />);

            if ((idx + 1) % 3 === 0 || (photos.length - idx) === 0) {
                finalPhotos.push(
                    <View key={idx} style={{ flexDirection: 'row' }}>
                        {rowPhotos.map((photo) => {
                            return photo
                        })}
                    </View>
                );
                rowPhotos = [];
            }

            return finalPhotos;
        }, [])
    }

    render() {

        const { container } = styles;
        const { loading } = this.state;

        if (loading) {
            return <Loading />;
        }

        // console.log(this.constructPhotoLayout());

        return (
            <View style={container}>
                <ScrollView>
                    {this.constructPhotoLayout().map(item => item)}
                </ScrollView>
            </View>
        );
    }
}

export default AlbumDetails;
