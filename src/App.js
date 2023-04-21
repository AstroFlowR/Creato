// App.js

import React, { useState } from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Home from './Home';
import ProductSwipe from './ProductSwipe';
import './App.css';

function App() {
  const [selectedPage, setSelectedPage] = useState('Home');

  const renderContent = () => {
    switch (selectedPage) {
      case 'Home':
        return <Home />;
      case 'ProductSwipe':
        return <ProductSwipe />;
      // Add more cases for other pages if needed
      default:
        return <Home />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <TopBar />
      <div style={{ flexGrow: 1 }}>{renderContent()}</div>
      <BottomBar onSelectedPageChange={setSelectedPage} selectedPage={selectedPage} />
    </div>
  );
}

export default App;
