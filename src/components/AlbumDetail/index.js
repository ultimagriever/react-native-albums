import React from 'react';
import { Image, Text, View, Linking } from 'react-native';
import Card from '../Card';
import CardSection from '../CardSection';
import Button from '../Button';
import styles from './styles';

const AlbumDetail = props => (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image source={{ uri: props.thumbnail_image }} style={styles.thumbnail} />
        </View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>{props.title}</Text>
          <Text style={styles.artistText}>{props.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: props.image }} style={styles.albumCover} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(props.url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
);

export default AlbumDetail;
