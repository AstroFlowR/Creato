import React from 'react';
import { View, StyleSheet } from 'react-native';
import StoryCircle from './StoryCircle';

const Home = ({ navigation }) => {
  const onStoryPress = () => {
    // Navigate to the full story page
    navigation.navigate('Story');
  };

  return (
    <View style={styles.container}>
      <StoryCircle
        image="https://example.com/image-url.jpg"
        onPress={onStoryPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
