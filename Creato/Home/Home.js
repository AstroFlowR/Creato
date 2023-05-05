import React from 'react';
import { View, StyleSheet } from 'react-native';
import StoryBar from './Components/StoryBar';
import { stories } from './../storiesData'; // Import the stories constant

const Home = ({onSelectedPageChange}) => {
  return (
    <View style={styles.container}>
      <View style={styles.storyBarContainer}>
        <StoryBar onSelectedPageChange={onSelectedPageChange} stories={stories} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  storyBarContainer: {
    height: 120, // Set a fixed height for the container
    width: '100%',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
});

export default Home;