import React from 'react';
import { View, Text } from 'react-native';

const CardSection = props => (
    <View>
      <Text>{props.children}</Text>
    </View>
);

export default CardSection;
