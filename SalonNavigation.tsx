import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Fonta from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialIcons';
import SalonProfile from './screens/SalonProfile';
import SalonBookings from './screens/SalonBookings';
import SalonServices from './screens/SalonServices';
import SalonAddService from './screens/SalonAddService';
import Settings from './screens/Settings';
import HeaderOptions from './components/HeaderOptions';
import SalonConfirmedBookings from './screens/SalonConfirmedBookings';
import SalonNewBookings from './screens/SalonNewBookings';

const SalonNavigation = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const BottomTabsSalon = () => {
    return (
      <Tab.Navigator>
  <Tab.Screen
          name="SalonBookings"
          component={SalonBookings}
          options={{
            // tabBarLabel: 'SalonBookings',
            headerShown: false,
            tabBarShowLabel: false, // Use tabBarShowLabel to hide labels
            tabBarIcon: ({ focused, color, size }) => (
              focused ? <AntDesign name="calendar" size={50} color="black" /> : <AntDesign name="calendar" size={50} color="#938F8F" />
            ),
          }}
        />
        <Tab.Screen
          name="SalonServices"
          component={SalonServices}
          options={{
            // tabBarLabel: 'SalonServices',
            headerShown: false,
            tabBarShowLabel: false, // Use tabBarShowLabel to hide labels
            tabBarIcon: ({ focused, color, size }) => (
              <Fontisto
                name="scissors"
                size={50}
                color={focused ? 'black' : '#938F8F'}
              />
            ),
            headerTitleStyle: {
              fontSize: 18,
              color: '#C90A09',
            },
          }}
        />


 <Tab.Screen
          name="SalonProfile"
          component={SalonProfile}
          options={{
            // tabBarLabel: 'SalonProfile',
            headerShown: false,
            tabBarShowLabel: false, // Use tabBarShowLabel to hide labels
            tabBarIcon: ({ focused, color, size }) => (
              focused ? <Fonta name="user-circle" size={50} color="black" /> : <Fonta name="user-circle" size={50} color="#938F8F" />
            ),
          }}
        />

        <Tab.Screen
          name="settings"
          component={Settings}
          options={{
            // tabBarLabel: 'settings',
            headerShown: false,
            tabBarShowLabel: false, // Use tabBarShowLabel to hide labels
            tabBarIcon: ({ focused, color, size }) => (
              focused ? <Material name="settings" size={50} color="black" /> : <Material name="settings" size={50} color="#938F8F" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="mainSalon"
          options={HeaderOptions}
          component={BottomTabsSalon}
        />

        <Stack.Screen
          component={SalonAddService}
          name="SalonAddService"
          options={HeaderOptions}
        />

         <Stack.Screen
                  component={SalonBookings}
                  name="SalonBookings"
                  options={HeaderOptions}
                />
         <Stack.Screen
                  component={SalonConfirmedBookings}
                  name="SalonConfirmedBookings"
                  options={HeaderOptions}
                />
        <Stack.Screen
                 component={SalonNewBookings}
                 name="SalonNewBookings"
                 options={HeaderOptions}
               />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SalonNavigation;
