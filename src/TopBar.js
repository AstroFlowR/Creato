import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar';
import './App.css';

const TopBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="top-bar">
      <div style={{ textAlign: 'left' }} onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <div style={{ textAlign: 'center', flexGrow: 1 }}>Company Name</div>
      <div style={{ position: 'relative' }}>
        {isSidebarOpen && <div className="sidebar-backdrop" onClick={closeSidebar}></div>}
        <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
          <Sidebar closeSidebar={closeSidebar} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
