import React, { useState } from 'react';
import PageSelection from './PageSelection';
import { FaHome, FaShoppingCart, FaCartPlus, FaUser, FaInfo, FaTimes } from 'react-icons/fa';

const Sidebar = ({ closeSidebar }) => {
  const [selectedPage, setSelectedPage] = useState(null);

  const selectPage = (page) => {
    setSelectedPage(page);
    closeSidebar();
  };

  return (
    <div style={{ backgroundColor: 'orangered', width: '250px', height: '100%', position: 'absolute', top: 0, right: 0 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', paddingTop: '35px' }}>
        <PageSelection icon={<FaHome />} label='Home' onClick={() => selectPage('Home')} />
        <PageSelection icon={<FaShoppingCart />} label='Shop' onClick={() => selectPage('Shop')} />
        <PageSelection icon={<FaCartPlus />} label='Cart' onClick={() => selectPage('Cart')} />
        <PageSelection icon={<FaUser />} label='Login' onClick={() => selectPage('Login')} />
        <PageSelection icon={<FaInfo />} label='About Us' onClick={() => selectPage('About Us')} />
      </div>
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <FaTimes size={24} onClick={closeSidebar} />
      </div>
      {selectedPage && (
        <div style={{ marginTop: '20px', textAlign: 'center', height: '100%' }}>
          <h2>{selectedPage}</h2>
          <p>This is the {selectedPage} page.</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
