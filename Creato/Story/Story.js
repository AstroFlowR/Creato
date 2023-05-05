import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video'; // Import the Video component
import { getStoryById } from '../storiesData'; // Import the getStoryById function

const Story = ({ id }) => {
  const story = getStoryById(id); // Get the story data by id
  const videoSource = story?.videoSource; // Retrieve the video source

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoSource }}
        style={styles.video}
        resizeMode="cover" //Fit the video to the screen size
        onError={(error) => console.log('Error:', error)} // Handle errors
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Story;