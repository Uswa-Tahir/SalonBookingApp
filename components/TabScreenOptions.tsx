import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Fonta from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialIcons';

export const getTabScreenOptions = (routeName, label, icon) => ({
  tabBarLabel: label,
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => (
    focused ? React.createElement(icon, { name: icon, size: 50, color: 'black' }) : React.createElement(icon, { name: icon, size: 40, color: '#938F8F' })
  ),
});
