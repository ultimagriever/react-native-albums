import React from 'react';
import { View, Text } from 'react-native';
import Card from '../Card';
import CardSection from '../CardSection';

const AlbumDetail = props => (
    <Card>
      <CardSection>{props.title}</CardSection>
    </Card>
);

export default AlbumDetail;
