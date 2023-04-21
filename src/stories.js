import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, Text } from 'react-native';

storiesOf('StoryBubble', module)
  .add('default', () => (
    <View style={{ alignItems: 'center' }}>
      <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: 'lightblue', margin: 10 }}>
        <Text style={{ fontSize: 40, textAlign: 'center' }}>+</Text>
      </View>
      <Text>Your Story</Text>
    </View>
  ));