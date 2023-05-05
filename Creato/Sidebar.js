import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PageSelection from './PageSelection';
import { FaHome, FaShoppingCart, FaCartPlus, FaUser, FaInfo, FaTimes } from 'react-icons/fa';

const Sidebar = ({ closeSidebar }) => {
  const [selectedPage, setSelectedPage] = useState(null);

  const selectPage = (page) => {
    setSelectedPage(page);
    closeSidebar();
  };

  return (
    <View style={{ backgroundColor: 'orangered', width: 250, height: '100%', position: 'absolute', top: 0, right: 0 }}>
      <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', paddingTop: 35 }}>
        <PageSelection icon={<FaHome />} label='Home' onClick={() => selectPage('Home')} />
        <PageSelection icon={<FaShoppingCart />} label='Shop' onClick={() => selectPage('Shop')} />
        <PageSelection icon={<FaCartPlus />} label='Cart' onClick={() => selectPage('Cart')} />
        <PageSelection icon={<FaUser />} label='Login' onClick={() => selectPage('Login')} />
        <PageSelection icon={<FaInfo />} label='About Us' onClick={() => selectPage('About Us')} />
      </View>
      <View style={{ position: 'absolute', top: 10, right: 10 }}>
        <TouchableOpacity onPress={closeSidebar}>
          <FaTimes size={24} />
        </TouchableOpacity>
      </View>
      {selectedPage && (
        <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{selectedPage}</Text>
          <Text>This is the {selectedPage} page.</Text>
        </View>
      )}
    </View>
  );
};

export default Sidebar;