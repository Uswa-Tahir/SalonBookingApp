/*import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import Material from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fonta from 'react-native-vector-icons/FontAwesome5';
import HeaderOptions from './components/HeaderOptions';
import SelectDate from './screens/SelectDate';
import Home from './screens/Home';
import SalonDetailsPage from './screens/SalonDetailsPage';
import UserProfile from './screens/UserProfile';
import UserBookings from './screens/UserBookings';
import UserBookedAppointment from './screens/UserBookedAppointment';
import ViewServicesPage from './screens/ViewServicesPage';
import Settings from './screens/Settings';

const UserNavigation = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator
       >
        <Tab.Screen
          name="Welcome"
          component={Home}
          options={{
            //tabBarLabel: 'Home',
            tabBarShowLabel:false,
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              focused ? <Entypo name="home" size={50} color="black" /> : <Entypo name="home" size={50} color="#938F8F" />
            ),
          }}
        />

        <Tab.Screen
          name="userprofilescreen"
          component={UserProfile}
          options={{
            //tabBarLabel: 'Profile',
            headerShown: false,
                        tabBarShowLabel:false,
            tabBarIcon: ({ focused, color, size }) => (
              focused ? <Fonta name="user-circle" size={50} color="black" /> : <Fonta name="user-circle" size={50} color="#938F8F" />
            ),
            headerTitleStyle: {
              fontSize: 18, // Set the font size for the header title
              color: '#C90A09', // Set the text color for the header title
            },
          }}
        />

        <Tab.Screen
          name="Bookings"
          component={UserBookings}
          options={{
            //tabBarLabel: 'Bookings',
            headerShown: false,
            tabBarShowLabel:false,
            tabBarIcon: ({ focused, color, size }) => (
              focused ? <AntDesign name="calendar" size={50} color="black" /> : <AntDesign name="calendar" size={50} color="#938F8F" />
            ),
          }}
        />

        <Tab.Screen
          name="settings"
          component={Settings}
          options={{
            //tabBarLabel: 'settings',
            headerShown: false,
            tabBarShowLabel:false,
            tabBarIcon: ({ focused, color, size }) => (
              focused ? <Material name="settings" size={50} color="black" /> : <Material name="settings" size={50} color="#938F8F" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          component={BottomTabs}
          name="main"
          options={HeaderOptions}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={HeaderOptions}
        />

        <Stack.Screen
          name="SalonDetailsPage"
          component={SalonDetailsPage}
          options={HeaderOptions}
        />

        <Stack.Screen
          name="ViewServicesPage"
          component={ViewServicesPage}
          options={HeaderOptions}
        />

         <Stack.Screen
           name="SelectDate"
           component={SelectDate}
            options={HeaderOptions}
                />
         <Stack.Screen
                    name="UserBookedAppointment"
                    component={UserBookedAppointment}
                    options={HeaderOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserNavigation;
*/

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import Material from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fonta from 'react-native-vector-icons/FontAwesome5';
import HeaderOptions from './components/HeaderOptions';
import SelectDate from './screens/SelectDate';
import Home from './screens/Home';
import SalonDetailsPage from './screens/SalonDetailsPage';
import UserProfile from './screens/UserProfile';
import UserBookings from './screens/UserBookings';
import UserBookedAppointment from './screens/UserBookedAppointment';
import ViewServicesPage from './screens/ViewServicesPage';
import Settings from './screens/Settings';
import SalonProfile from './screens/SalonProfile';
import SalonBookings from './screens/SalonBookings';
import SalonServices from './screens/SalonServices';
import SalonAddService from './screens/SalonAddService';
import SalonConfirmedBookings from './screens/SalonConfirmedBookings';
import SalonNewBookings from './screens/SalonNewBookings';
import Splash from './screens/Splash'; // Update the path accordingly
import GetStarted from './screens/GetStarted'; // Update the path accordingly
import Login from './screens/Login'; // Update the path accordingly
import ForgotPassword from './screens/ForgotPassword'; // Update the path accordingly
import WhoAreYou from './screens/WhoAreYou'; // Update the path accordingly
import SignUp from './screens/SignUp';
import Fontisto from 'react-native-vector-icons/Fontisto';

const UserNavigation = () => {
  const Tab = createBottomTabNavigator();
    const tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const BottomTabsSalon = () => {
    return (
      <tab.Navigator>
  <tab.Screen
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
        <tab.Screen
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


 <tab.Screen
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

        <tab.Screen
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
      </tab.Navigator>
    );
  };

  function BottomTabs() {
    return (
      <Tab.Navigator
       >
        <Tab.Screen
          name="Welcome"
          component={Home}
          options={{
            //tabBarLabel: 'Home',
            tabBarShowLabel:false,
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              focused ? <Entypo name="home" size={50} color="black" /> : <Entypo name="home" size={50} color="#938F8F" />
            ),
          }}
        />

        <Tab.Screen
          name="userprofilescreen"
          component={UserProfile}
          options={{
            //tabBarLabel: 'Profile',
            headerShown: false,
                        tabBarShowLabel:false,
            tabBarIcon: ({ focused, color, size }) => (
              focused ? <Fonta name="user-circle" size={50} color="black" /> : <Fonta name="user-circle" size={50} color="#938F8F" />
            ),
            headerTitleStyle: {
              fontSize: 18, // Set the font size for the header title
              color: '#C90A09', // Set the text color for the header title
            },
          }}
        />

        <Tab.Screen
          name="Bookings"
          component={UserBookings}
          options={{
            //tabBarLabel: 'Bookings',
            headerShown: false,
            tabBarShowLabel:false,
            tabBarIcon: ({ focused, color, size }) => (
              focused ? <AntDesign name="calendar" size={50} color="black" /> : <AntDesign name="calendar" size={50} color="#938F8F" />
            ),
          }}
        />

        <Tab.Screen
          name="settings"
          component={Settings}
          options={{
            //tabBarLabel: 'settings',
            headerShown: false,
            tabBarShowLabel:false,
            tabBarIcon: ({ focused, color, size }) => (
              focused ? <Material name="settings" size={50} color="black" /> : <Material name="settings" size={50} color="#938F8F" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" >
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
              />
               <Stack.Screen
                              name="GetStarted"
                              component={GetStarted}
                              options={{ headerShown: false }}
                            />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />

               <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                        options={{ headerShown: false }}
                      />

               <Stack.Screen
                                 name="WhoAreYou"
                                 component={WhoAreYou}
                                 options={{ headerShown: false }}
                               />
                <Stack.Screen
                                          name="SignUp"
                                          component={SignUp}
                                          options={{ headerShown: false }}
                   />

        <Stack.Screen
          component={BottomTabs}
          name="main"
          options={HeaderOptions}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={HeaderOptions}
        />

        <Stack.Screen
          name="SalonDetailsPage"
          component={SalonDetailsPage}
          options={HeaderOptions}
        />

        <Stack.Screen
          name="ViewServicesPage"
          component={ViewServicesPage}
          options={HeaderOptions}
        />

         <Stack.Screen
           name="SelectDate"
           component={SelectDate}
            options={HeaderOptions}
                />
         <Stack.Screen
                    name="UserBookedAppointment"
                    component={UserBookedAppointment}
                    options={HeaderOptions}/>

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

export default UserNavigation;
