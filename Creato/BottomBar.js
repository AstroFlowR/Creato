import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FaHome, FaShoppingCart, FaUser, FaInfo, FaHeart } from 'react-icons/fa';
import PageSelection from './PageSelection';

const BottomBar = ({ onSelectedPageChange, selectedPage }) => {
  return (
    <View style={{ backgroundColor: 'orangered', flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 0, right: 0, left: 0 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <PageSelection icon={<FaHome size={24} />} label='Home' onClick={() => onSelectedPageChange('Home')} active={selectedPage === 'Home'} style={{ flex: 1 }} />
        <PageSelection icon={<FaShoppingCart size={24} />} label='Shop' onClick={() => onSelectedPageChange('Shop')} active={selectedPage === 'Shop'} style={{ flex: 1 }} />
        <BigPageSelection icon={<FaHeart size={36} />} onClick={()=> onSelectedPageChange('ProductSwipe')} active={selectedPage === 'ProductSwipe'} />
        <PageSelection icon={<FaUser size={24} />} label='Login' onClick={() => onSelectedPageChange('Login')} active={selectedPage === 'Login'} style={{ flex: 1 }} />
        <PageSelection icon={<FaInfo size={24} />} label='About Us' onClick={() => onSelectedPageChange('About Us')} active={selectedPage === 'About Us'} style={{ flex: 1 }} />
      </View>
    </View>
  );
};

const BigPageSelection = ({ icon, onClick, active }) => {
  const activeColor = '#ff8c00';
  const inactiveColor = 'black';

  return (
    <TouchableOpacity onPress={onClick} style={{ alignSelf: 'flex-start', margin: 0 }}>
      <View style={{ backgroundColor: active ? activeColor : '#FF7F50', borderRadius: 50, padding: 10 }}>{React.cloneElement(icon, { color: active ? 'white' : inactiveColor })}</View>
      <Text style={{ color: active ? activeColor : inactiveColor }}></Text>
    </TouchableOpacity>
  );
};

export default BottomBar;