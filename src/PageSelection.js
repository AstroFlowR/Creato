import React from 'react';

const PageSelection = ({ icon, label, onClick, active }) => {
  const activeColor = '#ff8c00';
  const inactiveColor = 'black';

  return (
    <button className="sidebar-button" onClick={onClick} style={{ alignSelf: 'flex-start' }}>
      {React.cloneElement(icon, { color: active ? activeColor : inactiveColor })}
      <div style={{ color: active ? activeColor : inactiveColor, fontSize: '14px' }}></div>
    </button>
  );
};

export default PageSelection;


