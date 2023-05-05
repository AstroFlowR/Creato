import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Home from './Home/Home';
import ProductSwipe from './ProductSwipe';
import Story from './Story/Story';

function App() {
  const [selectedPage, _setSelectedPage] = useState('Home');
  const [storyID, setStoryID] = useState(0);

  function setSelectedPage(newPage, newStoryID) {
    if (newStoryID !== undefined) {
      setStoryID(newStoryID);
    }
    _setSelectedPage(newPage);
  }

  const renderContent = () => {
    switch (selectedPage) {
      case 'Home':
        return <Home onSelectedPageChange={setSelectedPage} />;
      case 'ProductSwipe':
        return <ProductSwipe />;
      case 'Story':
        return <Story id={storyID} />;
      // Add more cases for other pages if needed
      default:
        return <Home />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <View style={styles.content}>{renderContent()}</View>
      <BottomBar onSelectedPageChange={setSelectedPage} selectedPage={selectedPage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default App;