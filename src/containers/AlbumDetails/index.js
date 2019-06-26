import React, { Component } from 'react';
import { FlatList, View, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation';

import Photo from '../../components/Photo';
import Loading from '../../components/Loading';
import axios from '../../utilities/axios';

import styles from './styles';

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

    constructPhotoLayout = () => {
        const { photos } = this.state;

        let rowPhotos = [];
        // let idxes = [];
        return photos.reduce((finalPhotos, curPhoto, idx) => {

            rowPhotos.push(<Photo key={idx} imgUri={curPhoto.thumbnailUrl} />);

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
