import React, { Component } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import styles from './styles';
import AlbumDetail from '../../components/AlbumDetail';

export default class AlbumList extends Component {
  state = {
    loading: false,
    albums: []
  }

  componentWillMount() {
    this.setState({
      loading: true
    }, () => {
      /* eslint-disable */
      fetch('https://rallycoding.herokuapp.com/api/music_albums')
          .then(response => response.json())
          .then(json => {
            this.setState({
              loading: false,
              albums: json
            });
          });
      /* eslint-enable */
    });
  }

  render() {
    return this.state.loading ? (
        <ActivityIndicator style={styles.loading} size="large" color="black" />
    ) : (
      <ScrollView>
        {
            this.state.albums.map(album => <AlbumDetail key={album.title} {...album} />)
        }
      </ScrollView>
    );
  }
}
