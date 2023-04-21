// BottomBar.js

import React from 'react';
import { FaHome, FaShoppingCart, FaUser, FaInfo, FaHeart } from 'react-icons/fa';
import PageSelection from './PageSelection';


const BottomBar = ({ onSelectedPageChange, selectedPage }) => {
  return (
    <div style={{ backgroundColor: 'orangered', display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 0, right: 0, left: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <PageSelection icon={<FaHome size={24} />} label='Home' onClick={() => onSelectedPageChange('Home')} active={selectedPage === 'Home'} style={{ flex: 1 }} />
        <PageSelection icon={<FaShoppingCart size={24} />} label='Shop' onClick={() => onSelectedPageChange('Shop')} active={selectedPage === 'Shop'} style={{ flex: 1 }} />
        <BigPageSelection icon={<FaHeart size={36} />} onClick={() => onSelectedPageChange('ProductSwipe')} active={selectedPage === 'ProductSwipe'} />
        <PageSelection icon={<FaUser size={24} />} label='Login' onClick={() => onSelectedPageChange('Login')} active={selectedPage === 'Login'} style={{ flex: 1 }} />
        <PageSelection icon={<FaInfo size={24} />} label='About Us' onClick={() => onSelectedPageChange('About Us')} active={selectedPage === 'About Us'} style={{ flex: 1 }} />
      </div>
    </div>
  );
};

const BigPageSelection = ({ icon, onClick, active }) => {
  const activeColor = '#ff8c00';
  const inactiveColor = 'black';

  return (
    <button className="sidebar-button" onClick={onClick} style={{ alignSelf: 'flex-start', margin: '0px' }}>
      <div style={{ background: active ? activeColor : '#FF7F50', borderRadius: '50%', padding: 10 }}>{React.cloneElement(icon, { color: active ? 'white' : inactiveColor })}</div>
      <div style={{ color: active ? activeColor : inactiveColor }}></div>
    </button>
  );
};

export default BottomBar;
