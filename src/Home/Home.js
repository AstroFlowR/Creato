import React from 'react';
import { View, StyleSheet } from 'react-native';
import StoryBar from './Components/StoryBar';

const Home = ({onSelectedPageChange}) => {
  const stories = [{
    id: 1,
    image: 'https://www.w3schools.com/howto/img_avatar.png',
    user: 'user1'
  },
  {
    id: 2,
    image: 'https://www.w3schools.com/howto/img_avatar.png',
    user: 'user2'
  },  
  {
    id: 3,
    image: 'https://www.w3schools.com/howto/img_avatar.png',
    user: 'user3'
  },
  {
    id: 4,
    image: 'https://www.w3schools.com/howto/img_avatar.png',
    user: 'user4'
  },
  {
    id: 5,
    image: 'https://www.w3schools.com/howto/img_avatar.png',
    user: 'user5'
  },
  {
    id: 6,
    image: 'https://www.w3schools.com/howto/img_avatar.png',
    user: 'user6'
  }
]

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