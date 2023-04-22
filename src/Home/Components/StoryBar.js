import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import StoryCircle from './StoryCircle';

const StoryBar = ({ onSelectedPageChange, stories }) => {
  const onStoryPress = (id) => {
    // Navigate to the full story page
    onSelectedPageChange('Story', id);
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          {stories.map((story, index) => (
            <StoryCircle
              key={index}
              image={story.image}
              onPress={() => onStoryPress(story.id)}
              style={{ marginRight: index === stories.length - 1 ? 0 : 10 }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    height: 120,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default StoryBar;
