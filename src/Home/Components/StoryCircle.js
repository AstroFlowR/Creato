import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const StoryCircle = ({ image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.circle}>
      <Image source={{ uri: image }} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4, // Add a thick border
    borderColor: 'black', // Set the border color to black
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default StoryCircle;
