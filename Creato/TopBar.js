import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FaBars, FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar';

const TopBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <View style={styles.topBar}>
      <TouchableOpacity style={styles.icon} onPress={toggleSidebar}>
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </TouchableOpacity>
      <Text style={styles.companyName}>Company Name</Text>
      <View style={styles.sidebarContainer}>
        {isSidebarOpen && (
          <TouchableOpacity style={styles.sidebarBackdrop} onPress={closeSidebar} />
        )}
        <View style={[styles.sidebar, isSidebarOpen ? styles.show : null]}>
          <Sidebar closeSidebar={closeSidebar} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: '#f8f9fa',
  },
  icon: {
    alignItems: 'flex-start',
    width: 24,
  },
  companyName: {
    flexGrow: 1,
    textAlign: 'center',
  },
  sidebarContainer: {
    position: 'relative',
  },
  sidebarBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebar: {
    position: 'absolute',
    top: 56,
    right: 0,
    bottom: 0,
    width: '80%',
    backgroundColor: 'white',
    display: 'none',
  },
  show: {
    display: 'flex',
  },
});

export default TopBar;