import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const PageSelection = ({ icon, label, onClick, active }) => {
  const activeColor = '#ff8c00';
  const inactiveColor = 'black';

  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
      }}>
      {React.cloneElement(icon, { color: active ? activeColor : inactiveColor })}
      <Text style={{ color: active ? activeColor : inactiveColor, fontSize: 14 }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default PageSelection;